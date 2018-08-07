/*
소수를 크기 순으로 나열하면 2, 3, 5, 7, 11, 13, ... 과 같이 됩니다.
이 때 10,001번째의 소수를 구하세요.
*/

// 소수 : 1과 자기 자신으로 나누어지는 수

function Jin(){
    var a = [];
        for (var j = 1; j < 100; j++){
            for (var i = 1; i <= j; i++){
                if(j % i == 0){
                    a[j] += 1;
                }
            }
        }
    return a;
}

console.log(Jin());
