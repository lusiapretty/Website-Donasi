const btnBarang = document.querySelector('.btnbarang');
    btnBarang.addEventListener('click', function(e) {
        e.preventDefault();
        const inputJumlahBarang = document.getElementById('jumlah-barang').value;
        const jumlahBarangDonasi = parseInt(inputJumlahBarang);
    
        if (!isNaN(jumlahBarangDonasi)) {
            const totalBarangElement = document.querySelector('.total-barang');
            const currentTotalBarang = parseInt(totalBarangElement.textContent.trim());
            const tambahJumlahBarang = jumlahBarangDonasi;
    
            const newTotalBarang = currentTotalBarang + tambahJumlahBarang;
            totalBarangElement.textContent = newTotalBarang;
        }
    });