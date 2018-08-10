/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

/*
소수를 크기 순으로 나열하면 2, 3, 5, 7, 11, 13, ... 과 같이 됩니다.
이 때 10,001번째의 소수를 구하세요.
*/

// 소수 : 1과 자기 자신으로 나누어지는 수

function Sosu(){
    var i = 0;
    var b = 0;
    while(true){
        var k = 0;

        for(var j = 0; j <= i; j++){
          if(i % j == 0){
              k += 1;
          }
        }
        if(k==2){
            console.log(i);
            b += 1;
        }
        if(b==10001){
            alert('i');
            break;
        }
        i++
    }
}

Sosu();
