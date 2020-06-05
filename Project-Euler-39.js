var sayı = 10; // kenar uzunlukları toplamı sayıya eşit olacak şekilde döngümüz ilk kontrol edeceği sayıyı seçiyoruz. 10 makul bir seçim. minimum 3 seçilebilir.
var sayac=0; // döngüdeki sayıyla kaç tane dik üçgen oluşturabileceğimizi saydırıyoruz.
var sonucsayı = 0; // bizden istenilen sonucu bu değişkene aktarıcaz.
var sonucsayıadet= 0; // bulduğumuz sonuçtaki kenar uzunluğuyla kaç tane dik üçgen oluşturabildiğimizi tutacak olan değer. opsiyondur.
for(var a = 1; a < sayı; a++) // ilk seçtiğimiz 10 sayısıyla kontrollere başlıyoruz.
{
    for(var b = 1; b < sayı-a; b++) // ikinci kenarımızı birinci kenara göre döngüye sokuyoruz. 
    { 
        var c = sayı-a-b; // ilk iki sayı döngüyle belirleniyor 3. sayı işlemle bulunur.
        if(a+b+c <=1000){ // sayılarımızın toplamı 1000'i geçmemeli
            if(a*a+b*b == c*c){ // dik üçgen kontrolü
                console.log("BİNGO!"+a+" "+b+" "+c); // dik üçgense konsolda gösteriyoruz.
                sayac = sayac+1; // şuan döngüde kontrol edilen "sayı"'nın içinde kaç tane dik üçgen olduğunu sayıyoruz
            }
            if(a == sayı-2){ // bu durumda kontrol edilen sayı alabileceği tüm kenar değerlerini almıştır.
                if(sayac > sonucsayı) // kontrol edilen sayıyla oluşabilecek dik üçgen sayısı şuana kadar en büyük değerse
                {
                    sonucsayı = sayı; // yeni rekortmen değerleri atanır
                    sonucsayıadet = sayac; // rekortmen sayının kaç tane dik üçgen oluşturduğudur.
                    console.log("Yeni rekortmen! "+ sonucsayı); // konsola rekortmen yazılır.
                }
                if( sayı < 1000){ // sayımız 1000 den fazla olamaz. 
                    sayı = sayı+1; // ilgili sayıyla ilgili tüm kontroller yapılınca bir üst sayıyı döngüye sokarız.
                    a=1; // döngüyü baştan başlatmak için a değeri 1 atanır.
                    sayac = 0; // sayac sayılara özgün olduğu için her döngü sonunda sıfırlanmalıdır. 
                }
            }
        }
    }
}

console.log("Rekortmen sayımız: "+sonucsayı); // bizden istenilen sonuç.
console.log("Dik üçgen sayısı: "+sonucsayıadet); // sonuçla yapılabilecek dik üçgen sayısı.