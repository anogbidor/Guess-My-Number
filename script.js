'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Doğru sayı'

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent = 15
// // console.log(document.querySelector('.number'))
// document.querySelector('.score').textContent = 10

// console.log(document.querySelector('.guess').value)

// document.querySelector('.guess').value = 25

let gizliNumara = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = gizliNumara;
let puan = 20;
let yuksekPuan = 0;
const ekranMesaji = function (mesaj) {
  document.querySelector('.message').textContent = mesaj;
};
document.querySelector('.check').addEventListener('click', function () {
  const tahmin = Number(document.querySelector('.guess').value);

  console.log(tahmin, typeof tahmin);
  //Değer girilmemiş
  if (!tahmin) {
    // document.querySelector('.message').textContent = 'Sayı yok';
    ekranMesaji('Sayi yok');

    //Oyuncu kazanır
  } else if (tahmin === gizliNumara) {
    ekranMesaji('Dogru Sayi');
    document.querySelector('.message').textContent = 'Doğru sayı';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (puan > yuksekPuan) {
      yuksekPuan = puan;
      document.querySelector('.highscore').textContent = yuksekPuan;
    }
    // tahmin yanlis oldugunda
  } else if (tahmin !== gizliNumara) {
    if (puan > 1) {
      ekranMesaji(tahmin > gizliNumara ? ' cok Yuksek ' : 'cok dusuk');
      // document.querySelector('.message').textContent =
      //   tahmin > gizliNumara ? 'cok yuksek' : 'cok dusuk';
      puan--;
      document.querySelector('.score').textContent = puan;
    } else {
      ekranMesaji('oyunu kaybettiniz');
      // document.querySelector('.message').textContent = 'Oyunu kaybettiniz';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//Yüksek tahmin
// else if (tahmin > gizliNumara) {

//     //Düşük tahmin
//   } else if (tahmin < gizliNumara) {
//     if (puan > 1) {
//       document.querySelector('.message').textContent = 'Çok düşük';
//       puan--;
//       document.querySelector('.score').textContent = puan;
//     } else {
//       document.querySelector('.message').textContent = 'Oyunu kaybettiniz';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
// document.querySelector('.message').textContent = 'Doğru sayı'

document.querySelector('.again').addEventListener('click', function () {
  puan = 20;
  gizliNumara = Math.trunc(Math.random() * 20) + 1;
  ekranMesaji('tahmin et');
  // document.querySelector('.message').textContent = 'tahmin et!';
  document.querySelector('.score').textContent = puan;
  document.querySelector('.message').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = document.querySelector(
    '.number'
  ).style.width = '15rem';
});
