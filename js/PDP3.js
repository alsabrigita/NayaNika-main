document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen tombol "Add to Cart"
    var addToCartButton = document.querySelector('button');

    // Tambahkan event listener pada tombol
    addToCartButton.addEventListener('click', function() {
        // Ambil nilai dari input jumlah
        var quantityInput = document.querySelector('input[type="number"]');
        var quantity = parseInt(quantityInput.value);

        // Validasi input
        if (isNaN(quantity) || quantity <= 0) {
            alert('Masukkan jumlah produk yang valid.');
            return;
        }

        // Kirim produk ke keranjang belanja
        var product = {
            name: 'Pembatas Buku Tenun',
            price: 150000,
            quantity: quantity
        };

        // Simpan produk ke localStorage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Produk ditambahkan ke keranjang belanja.');
        // Arahkan pengguna ke halaman keranjang
        window.location.href = 'cart.html';
    });
});

