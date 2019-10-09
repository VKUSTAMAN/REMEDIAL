
//menghitung huruf vokal
function hurufVokal(str) {
    var vokal = 'aeiouAEIOU';
	var count = 0;
    
	for (var x = 0; x < str.length; x++) {
		if (vokal.indexOf(str[x]) !== -1) {
			count++;
		}
	}
	return count;
}
console.log(hurufVokal('Vicky Kustaman'));

//urutkan angka
let myAngka = [4, 2, 3, 1,7];
let removed = myAngka.splice('0', '5', 1, 2, 3,4,7);
console.log(myAngka);

//ganjil dan genap
var nomor = [9, 2, 3, 4, 2, 7, 8, 5, 11, 1];

var genap = [];
var ganjil = [];
var i = 0;

	for(i; i <nomor.length; i++){
		if (nomor[i] % 2 == 0) {
			genap.push(nomor[i]);
		}else{
			ganjil.push(nomor[i]);
		}
	}
		console.log(genap);
		console.log(ganjil);