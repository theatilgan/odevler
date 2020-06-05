var n = 1000000;// bizden 1000000'a kadar olan değerler isteniyor.
var sayı = 0; // sonucumuzu bu değişken tutacak
var oranmax =0; // sonucumuzun oranı. opsiyonel
var sayac = 1; // döngüdeki sayıyla aralarında asal olan sayıları tutacak. 
var asalmı; // sayıların aralarında asal olup olmadığını tutan bool değeri.
var ilkcalisma = true; // ilk calıstırmadan sayac değeri 1 olacağı için oranı ilk sayıyla eşit alacak bu yanlış bir durum.

for (var a = 6; a < n; a++) { // kontrol edilen sayımız
    if(ilkcalisma != true){ // ilk defamı çalıştırıldığına dair kontrol
        var oran = (a-1)/sayac; // döngüden çıkan sayının oranını hesaplıyoruz.
        if(oran>oranmax){ // çıkan oran şuana kadar en büyük oranmı ? 
            oranmax = oran; // evetse yeni en büyük oranı atıyoruz
            sayı = a-1; // yeni en büyük orana sahip olan sayıyı atıyoruz.
            console.log("sayı: "+sayı+" oran: "+ oranmax); // console yeni maksimum değerimizi yazdırarak kontrol ediyoruz.
        }
    }
    ilkcalisma = false; // ilk çalışmanın gerçekleştiğini belirtiyoruz.
    sayac = 1; // sayaç her sayıdan sıfırlanmalı ama 1 değerlerini döngüden çekemiyoruz ve her sayı 1 ile aralarında asaldır, doğal olarak tüm sayılarımızdaki bölenlerin içinde 1 vardır.
    for (var b = 2; b < a; b++) {// bölenleri döngüye alıyoruz.
        asalmı = true;// her bölen kontrolünde bu değer true olarak atanmalı çünkü her yeni bölene geçişte asal olup olmama kontrolü tekrar başlıyor.
        if(b == 2){ // özel durum 2 böleni 27. satırdaki for döngüsünde mantık hatasına yol açtığı için özel olarak aralarında asal olup olmadığını denetliyoruz.
            if(a%2 !=0){// asaldır
                sayac = sayac +1; // sayaca eklenir
            }
        }
        else{
            for (var x = 2; x <= b; x++) { // 2 dışındaki bölenlerin sayıyla aralarında asal olup olmadığını kontrol ediyoruz

                if(a%x == 0 && b%x == 0){ // asal değildir
                    asalmı = false;// bölen asal değildir olarak işaretlenir.
                }
                else{ // asaldır
                    if(x == b){ // tüm değerler denenir ve denen sonuncu değeride hem sayı hemde denenen bölen tam olarak bölememişse kesinlikle aralarında asaldır
                        if(asalmı == true){// bu bölen asal değil olarak işaretlenmemişse
                            sayac = sayac +1; // sayaca eklenir
                        }
                        
                    }
                }
                
            }
        }
        
    }
    /////////////// ÖNEMLİ NOT : Soruda verilen örnek n= 10 sayısı için 6 değerinin oranı en büyük çıkması durumu denenmiş ve doğru çalışmıştır ancak bilgisayarımın gücü yetmediği için 1 milyon sayısı
    /////////////// tüm döngüleri atlatıp nihai sonucu verememiştir. daha güçlü bir bilgisayarda çalıştırınca sonucu vereceğini umuyorum.
    console.log("Sayı: "+sayı);
}
