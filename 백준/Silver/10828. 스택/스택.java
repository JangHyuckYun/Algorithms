import java.util.*;

public class Main {

    public static void main(String[] args) {
        Stack stack = new Stack();
        stack.start();
    }
}

class Stack {
    int[] com_arr;
    int com_len;
    int size = 0;
    Scanner sc;
    StringBuilder sb;

    void start() {
        sc = new Scanner(System.in);
        com_len = sc.nextInt();
        com_arr = new int[com_len];
        sb = new StringBuilder();

        for (int i = 0; i < com_len; i++) {
            String str = sc.next();
            check(str);
        }
        System.out.println(sb);
    }

    void check(String str) {
        switch (str) {
            case "push":
                push(sc.nextInt());
                break;

            case "pop":
                sb.append(pop()).append("\n");
                break;

            case "size":
                sb.append(size()).append("\n");
                break;

            case "empty":
                sb.append(empty()).append("\n");
                break;

            case "top":
                sb.append(top()).append("\n");
                break;
        }
    }

    void push(int number) {
        com_arr[size] = number;
        size++;
    }

    int pop() {
        if (size == 0) {
            return -1;
        } else {
            int res = com_arr[size - 1];
            com_arr[size - 1] = 0;
            size--;

            return res;
        }
    }

    int size() {
        return size;
    }

    int empty() {
        return size == 0 ? 1 : 0;
    }

    int top() { // 스택 가장 위에 있는 정수 출력 없을시 -1
        if (empty() == 1) {
            return -1;
        } else {
            return com_arr[size - 1];
        }
    }
}
