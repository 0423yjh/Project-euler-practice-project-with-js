/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

/*
10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.
이백만(2,000,000) 이하 소수의 합은 얼마입니까?
*/

function Prime(){
  var a = 0;
  var sum = 0;
  while(true){
      var k = 0;
      for(var i = 0; i < a; i++){
        if(a % i == 0){
          k += 1;
        }
        if(k == 2){
          sum += a;
        }
      }
      if(a >= 2000000){
        console.log(sum);
        break;
      }
      a++
      console.log(a);
  }
}

Prime();
