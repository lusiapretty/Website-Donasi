const btnUang = document.querySelector('.btnuang');
btnUang.addEventListener('click', function(e) {
    e.preventDefault();
    const inputJumlahUang = document.getElementById('jumlah-uang').value;
    const jumlahUangDonasi = parseInt(inputJumlahUang);

    if (!isNaN(jumlahUangDonasi)) {
        const totalUangElement = document.querySelector('.total-uang');
        const currentTotalUang = parseInt(totalUangElement.textContent.trim());
        const tambahJumlahUang = jumlahUangDonasi;

        const newTotalUang = currentTotalUang + tambahJumlahUang;
        totalUangElement.textContent = newTotalUang;
    }
});