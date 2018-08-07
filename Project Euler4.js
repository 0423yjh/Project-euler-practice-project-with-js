function Jin(){
  var c = 999;
  var val = [];
  for(var i = 100; i <= c; i++){
      for(var j = 100; j <= c; j++){
          var b = String(i*j);
          var b_rev = b.split("").reverse().join("");
          if(b==b_rev){
             val[i] = b;
          }
      }
  }
  val2 = val.sort(function(a, b){
    return b - a;
  })

  return val2[0];
}


alert(Jin());
