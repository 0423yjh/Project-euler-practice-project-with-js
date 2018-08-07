function jin(num){
    var d = Math.ceil(Math.sqrt(num));
    function Young(num){
        var i, limit = Math.ceil(Math.sqrt(num));
        for (i = 3; i <=limit; i += 2){
            if(num % i == 0){
              return false;
            }
        }
        return true;
    }

    d = (d & 1) == 0 ? d - 1 : d;

    while(!(num%d == 0 && Young(d))){
      d -= 2;
    }

    return d;
}

alert(jin(600851475143));
