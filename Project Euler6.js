function Sumf (num){
    var sum = 0;
    for (var i = 0; i <= num; i++){
      sum += i*i;
    }
    return sum
}

function XX(num){
    var sum = 0;
    for (var i = 0; i<=num; i++){
      sum += i;
    }
    var sum2 = sum * sum
    return sum2
}

alert(XX(100)-Sumf(100));
