//axios import buraya gelecek

import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------
ipAdresimiAl();
console.log(`IP ADRESİM = ${benimIP}`);


// IP adresini al

  

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek

ipAdresimiAl().then(function() {


	function yeniCard (data) {

		const divClass = document.createElement('div');
		divClass.setAttribute('class', "card" )
	
		const bayrak = document.createElement('img');
		bayrak.setAttribute('src', data.ülkebayrağı);
		divClass.append(bayrak);
	
		const cardInfo = document.createElement('div');
		cardInfo.classList.add('card-info');
		divClass.append(cardInfo);
	
		const baslik = document.createElement('h3');
		baslik.textContent = data.sorgu;
		cardInfo.append(baslik);
	
		const ulke = document.createElement('p');
		ulke.textContent = `${data.ülke} (${data.ülkeKodu})`;
		cardInfo.append(ulke);
	
	
		const enlemBoylam = document.createElement('p');
		enlemBoylam.textContent = `Enlem : ${data.enlem} Boylam : ${data.boylam}`;
		cardInfo.append(enlemBoylam);
	
		const sehir = document.createElement('p');
		sehir.textContent ="Şehir: " + data.şehir;
		cardInfo.append(sehir);
	
		const saat = document.createElement('p');
		saat.textContent = "Saat Dilimi: " + data.saatdilimi;
		cardInfo.append(saat);
	
		const para = document.createElement('p');
		para.textContent ="Para Birimi: " + data.parabirimi;
		cardInfo.append(para);
	
		const isp = document.createElement('p');
		isp.textContent = "ISP: " + data.isp;
		cardInfo.append(isp);

		return divClass;
			
	  }
	
	  const card = document.querySelector(".cards")
	
	axios.get(`https://apis.ergineer.com/ipgeoapi/`+ benimIP)
	.then(response => {
	  const ilkData = response.data;
	  console.log(ilkData); 
	  card.append(yeniCard(ilkData));
	})
	.catch(error => {
	  console.log(error);
	});
	
  });






