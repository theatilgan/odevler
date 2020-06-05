var veriler = [] 
var verileriki= []
var kesisenveriler =[]

// aşağıda iki tane rastgele dizi oluşturuyoruz, ben 10 ar tane olacak şekilde 2 dizi seçtiriyorum

for (var i = 1; i++<11;){
    var eklenecek = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    veriler.push(eklenecek);
}
for (var i = 1; i++<11;){
    var eklenecek = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    verileriki.push(eklenecek);
}

veriler.forEach(element => {
    var varmi = verileriki.includes(element) // ilk listede olan ikinci listede varmı ?
    if (varmi == true) { // varsa..
        kesisenveriler.push(element); //bu elemanı kesisen veriler listemize atıyoruz
    }
});

kesisenveriler.forEach(element => {
    console.log(element);
});