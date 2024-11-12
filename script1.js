
var hasil;
function hitung(proses){
    var a = parseFloat(document.getElementById('angkaPertama').value);
    var b = parseFloat(document.getElementById('angkaKedua').value);
    if(proses === '+'){
        hasil = a + b;
    }
    else if(proses === '-'){
        hasil = a - b;
    }
    else if(proses === '*'){
        hasil = a * b;
    }
    else if(proses === '/'){
        hasil = a / b
    }
    document.getElementById('hasil').textContent = hasil
}