var data = []
var datatwo = []
for (var i = 0; i++<6;){ // bize verilen data olmadığı için kendim rastgele ürettiriyorum
    var adding = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    data.push(adding);
}
var messagef; // ilk datayı konsola yazdırıyoruz
data.forEach(element => {
    messagef += element + " ,";
});
console.log(messagef);
for(var i= 0; ++i < data.length;){ // ilk veriden itibaren döngüyü çalıştırıyoruz
    var maxvalue = 0;               //kendinden sorna gelen indexteki sayılar için maksimum değer her index artışında sıfırlanmalı
    for(var j = i-1; ++j < data.length;){ // indexin sağındaki sayılara bakacağımız için buradaki index yukarıdakinden hep 1 adım önde olmalı.
        if (maxvalue < data[j]){ // maksimum değer kontrolü yapıyoruz
            maxvalue = data[j]; // eğer daha yüksek bir değer geldiyse yeni en yüksek değeri belirliyoruz
        }

    }
    datatwo.push(maxvalue); // en yüksek değeri yeni listemize atıyoruz.
}
datatwo.push(-1); // son indexin -1 olması isteniyor bunun için tüm işlemlerden sonra -1'i listemize göderiyoruz
var message; // çalıştığını görmek için 2. listeyi yazdırıyoruz
datatwo.forEach(element => {
    message += element + " ,";
});

console.log(message);
