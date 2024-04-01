function hesaplama() {
  let sonuc = document.getElementById("sonuc");
  let harfNotu = document.getElementById("harfNotu");
  let vizeInput = document.getElementById("vize");
  let finalInput = document.querySelector("#final");

  let vize_ortalamasi = vizeInput.value * 0.4;
  let final_ortalamasi = finalInput.value * 0.6;
  let not = vize_ortalamasi + final_ortalamasi;

  if (vizeInput.value.length == 0 && finalInput.value.length == 0) {
    alert("Vize ve Final Notu Boş Bıraklımaz");
  } else if (
    vizeInput.value > 100 ||
    vizeInput.value < 0 ||
    isNaN(vizeInput.value)
  ) {
    alert("Vize Notu Hatalı");
    vizeInput.value = "";
  } else if (
    finalInput.value > 100 ||
    finalInput.value < 0 ||
    isNaN(finalInput.value)
  ) {
    alert("Final Notu Hatalı");
    finalInput.value = "";
  } else {
    if (finalInput.value < 50) {
      alert("Final Notunuz 50'nin altında olduğu için dersi geçemediniz.");
    } else {
      if (not >= 90) {
        sonuc.innerHTML = Math.round(not);
        harfNotu.innerHTML = "AA";
      } else if (not < 90 && not >= 80) {
        sonuc.innerHTML = Math.round(not);
        harfNotu.innerHTML = "BA";
      } else if (not < 80 && not >= 70) {
        sonuc.innerHTML = Math.round(not);
        harfNotu.innerHTML = "BB";
      } else if (not < 70 && not >= 60) {
        sonuc.innerHTML = Math.round(not);
        harfNotu.innerHTML = "BC";
      } else if (not < 60 && not >= 50) {
        sonuc.innerHTML = Math.round(not);
        harfNotu.innerHTML = "CC";
      } else if (not < 50 && not >= 40) {
        sonuc.innerHTML = Math.round(not);
        harfNotu.innerHTML = "DC";
      } else if (not < 40) {
        sonuc.innerHTML = Math.round(not);
        harfNotu.innerHTML = "FF";
        console.log(not);
      }
    }
  }
}
