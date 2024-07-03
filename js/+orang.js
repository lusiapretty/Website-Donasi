const buttons = document.getElementsByClassName("btn-success");
for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", function () {
const jumlahElement = document.querySelector(".jumlah");
const currentJumlah = parseInt(jumlahElement.textContent.trim());
const tambahJumlah = 1; // Jumlah barang yang ingin ditambahkan

// Memperbarui jumlah barang
const newJumlah = currentJumlah + tambahJumlah;
jumlahElement.textContent = newJumlah;
});
}