import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

// 1. 숫자 배열에서 idx와 값을 찾는다.
// 2. 찾은 값으로, 오리지널 배열에서 해당 값에 해당하는 idx와 문자값을 가져온다.
// 2-1. addedGenres안에 해당 문자가 이미 존재 시, addedGenres및 result 안에 추가 후, 해당 관련 문자를 배열에서 삭제한다.
// 3. 2-1 진행 안했을 시 -> result안에 값을 추가하고, addedGenres 안에 문자값을 넣는다.
// 4. 문자 배열에 값이 없으면 종료.
class Solution {
      public int[] solution(String[] genres, int[] plays) {
        List<Integer> findedIdx = new ArrayList<>();
        List<String> targetedList = new ArrayList<>();
        String target = "";
        while (true) {
            if(findedIdx.size() == 0) {
                target = getHighGenre(genres, plays);
            }
            if (target.length() == 0) break;

            String finalTarget = target;
            int cnt = (int) targetedList.stream().filter(str -> str.equals(finalTarget)).count();
            int cntInGenres = (int) Arrays.stream(genres).filter(str -> str.equals(finalTarget)).count();
            if (cnt == 2 || cnt == cntInGenres) {
                for (int i = 0; i < plays.length; i++) {
                    if (genres[i].equals(target)) {
                        plays[i] = -1;
                    }
                }
                target = getHighGenre(genres, plays);
            }

            int findIdx = getMaxIdx(target, findedIdx, plays, genres);
            if (findIdx == -1) break;

            targetedList.add(target);
            findedIdx.add(findIdx);
        }

        return findedIdx.stream().mapToInt(i -> i).toArray();
    }

    public String getHighGenre(String[] genres, int[] plays) {
        HashSet<String> set = new HashSet(Arrays.asList(genres));
        String resultGenre = "";
        int resultTotal = -1;
        for (String genre : set) {
            int total = 0;
            for (int i = 0; i < plays.length; i++) {
                if (genres[i].equals(genre)) {
                    total += plays[i];
                }
            }
            if (resultTotal < total) {
                resultTotal = total;
                resultGenre = genre;
            }
        }
        return resultGenre;
    }

    public int getMaxIdx(String target, List<Integer> findedIdx, int[] plays, String[] genres) {
        int max = -1;
        int maxIdx = -1;
        if (target.length() > 0) {
            for (int i = 0; i < plays.length; i++) {
                if (findedIdx.contains(i)) continue;
                if (plays[i] > max && genres[i].equals(target)) {
                    max = plays[i];
                    maxIdx = i;
                }
            }
        } else {
            for (int i = 0; i < plays.length; i++) {
                if (findedIdx.contains(i)) continue;
                if (plays[i] > max) {
                    max = plays[i];
                    maxIdx = i;
                }
            }
        }

        return maxIdx;
    }
}