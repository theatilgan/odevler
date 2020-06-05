/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // buranın doldurulmasını istiyor ama headı nasıl kullanacağımı bilemedim.
};
// direk kendi kodumu yazıyorum.
var dizi = [5,3,8,7,11,9,15]; // elemanların tutalacağı dizi.
var n = 2; // sondan silinecek index.

if(n >=0 && n <= dizi.length) // silinmek istenen indexte bir eleman varmı ?
{                              
    var index = dizi.length-n; // biz sondan silinecek olan indexi istiyoruz bu yüzden tüm uzunluktan istenileni indexi çıkartıp
                               // baştan kaçıncı index olduğunu buluruz
    dizi.splice(index, 1); // diziden istenilen indexe göre çıkarma işlemi yapılır
}
console.log(dizi); // dizi konsola yazdırılır