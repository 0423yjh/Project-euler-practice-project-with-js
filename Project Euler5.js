/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.
그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?
*/

// 약수로 1, 2, 3, 4, 5, 6, 7, 8, 9, 10을 모두 숫자가 2520
// 약수로 특정 숫자를 가지는 함수를 짜면 될 듯

// 특정 숫자를 입력하면 그 숫자 이하의 모든 숫자를 약수로 가지는 숫자 출력
function Smallest(){
    var cnt = 1;

    while(true){
        var a = [0];
        var k = 0;
        for(var i = 1; i <= 20; i++){
            if(cnt % i == 0){
              a[i] = 1;
            } else{
              a[i] = 0;
            }
        }
        for(var j = 1; j <= 20; j++){
            k += a[j]
        }
        if(k==20){
          console.log(cnt);
          break;
        }
        a = [0];
        cnt++;
    }
}

Smallest();
