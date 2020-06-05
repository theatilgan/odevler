
// a + b + c = 1000      bu sayıların toplamı 1000 miş. a,b,c bir doğal sayı ve küçükten büyüğe sıralı

for(var a = 0; ++a<1000-2;) // a en küçük olduğu için döngü en küçük doğal sayıdan başlar; b' den bir küçükle biter
{

    for(var b = a+1; ++b<1000-1;){ // b, a'dan bir fazla olan doğal sayıyla başlar; c'den bir küçükle biter.

        for( var c = b+1; ++c<1000;){ // c en büyük olduğu için döngüde 1000 ile biter, b'den bir fazla ile başlar

            if(a+b+c == 1000) // şuan döngüdeki sayıların toplamı 1000 ediyorsa..
            {
                if( a*a + b*b == c*c){ // gelen sayılar pisagor teoremini karşılıyorsa..
                    console.log("sayılar"+a+","+b+","+c)

                    // sayılar konsol ekranına yazılır
                }
            }
        }
    }
}


