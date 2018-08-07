function Jin(){
    var num = 50000;
    var cnt = [];
    for (var i = 0; i <= num; i++){
        for (var j = 1; j <= 20; j++){
            var cnt[i] = 0;
            if (num % j == 0){
              cnt[i] += 1;
            }
        }
    }
    for (var k = 0; k <= cnt.length; k++){
      if (cnt[k] == 20){
         var result = cnt[k];
      }
    }
    return result;
}

alert(Jin());

// not finish, pass
