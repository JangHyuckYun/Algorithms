import java.util.HashSet;

class Solution {
    public int solution(int[] nums) {
        HashSet<Integer> set = new HashSet<Integer>();
        int requireCnt = nums.length / 2;
        
        for (int num : nums) {
            set.add(num);
        } 
        if(set.size() >= requireCnt) {
            return requireCnt;
        } else {
            return set.size();
        }
    }
}