function CountNumber (cnt) {
    var a = [];
    var b = 0;

    for (var i = 0; i <= cnt; i++){
        if(i <= 2){
            a[i] = i + 1;
        } else{
            a[i] = a[i-2] + a[i-1];
        }
        if(a[i] >= 4e6){
          break;
        }
    };

    for (var j = 0; j <= a.length; j++){
        if (a[j] % 2 == 0){
          b += a[j]
        }
    };

    return b;
};

console.log(CountNumber(4e6));
