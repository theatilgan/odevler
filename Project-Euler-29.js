
var sayılar =[];
var sayi;

for(var a = 1; ++a <101;){
    
    for (var b =1; ++b<101;){
       
        sayi = a ** b
        varmi = sayılar.includes(sayi)
        if(varmi == false){
            sayılar.push(sayi)
        }
        
        
    }
}
console.log(sayılar.length);

