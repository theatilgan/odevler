// 1 ocak 1900 pazartesi
var AydakiGunler = [0,31,0,31,30,31,30,31,31,30,31,30,31];// aylardaki gün sayısını tanımladım
var toplamgun = 0; 
var toplampazar = 0;
for (var yıl = 1900; ++yıl < 2000;){
    
    for(var ay= 0; ++ay<13;){
        if (ay == 2){ // dögüdeki ay şubat ise 
            var eklenecekgun = daysInFeb(yıl); // artık yıl hesaplaması yapılır
            toplamgun += eklenecekgun; // geçen gün sayısına o ayın günü eklenir
            var yenigunindex = toplamgun % 7; // toplam geçen günde mod bulunur.
            if(yenigunindex == 6){ // mod 6 ise bu pazara denk gelir. 
                toplampazar += 1; // toplam pazar sayımıza bir ekleriz
            }
        }
        else{
            var eklenecekgun = AydakiGunler[ay]; // döngüdeki aya göre gün eklenir.
            toplamgun += eklenecekgun; // geçen gün sayısına o ayın günü eklenir.
            var yenigunindex = toplamgun % 7;// toplam geçen günde mod bulunur.
            if(yenigunindex == 6){//mod 6 ise bu pazara denk gelir
                toplampazar += 1; //toplam pazar sayımıza bir ekleriz.
            }
        }
    }
    
}
function daysInFeb(yıl) { // artık yıl hesaplama fonksiyonu
    if (yıl % 4 != 0) return 28; //4 e bölündüğünde 0 kalanı vermiyorsa artık yıl değildir.
    if (yıl % 100 == 0 && yıl % 400 != 0) return 28; //100 e bölündüğünde 0 kalanı veriyorsa ve 400 e bölündüğünde 0 kalanı vermiyorsa
    // artık yıl değildir.
    return 29;// artık yıl olmama koşulları sağlanmaz ise bu yıl artık yıldır gün olarak 29 atanır.
}
console.log(toplampazar);
