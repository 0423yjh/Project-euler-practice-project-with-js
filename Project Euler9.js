function pytagoras(){
    var a, b, c = 1;
    for(var a = 1; a < 1000; a++){
        for(var b = 1; b <= 1000-a; b++){
            for(var c = 1; c <= 1000-a-b; c++){
                if (a+b+c==1000){
                    if(a*a+b*b==c*c){
                        return a*b*c
                    }
                }
            }
        }
    }
}

console.log(pytagoras());
