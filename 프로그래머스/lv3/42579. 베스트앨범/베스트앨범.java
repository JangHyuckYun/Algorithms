import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

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
