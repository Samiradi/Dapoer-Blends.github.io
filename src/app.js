document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
         { id: 1, name: 'Kopi Hitam', img: '1.jpg', price: 7000 },
         { id: 2, name: 'Matcha Greentea Prafe', img: '2.jpg', price: 17000 },
         { id: 3, name: 'Milkshake oreo blends Coklat dan Vanila', img: 'milkshake-p.png', price: 17000 },
         { id: 4, name: 'Cappucino Cincau Blends', img: 'cappucino-cincau-p.png', price: 17000 },
         { id: 5, name: 'Es Teh Manis', img: 'es-teh-p.png', price: 7000 },
         { id: 6, name: 'Es Jeruk Segar', img: 'es-jeruk-p.png', price: 10000 },
         { id: 7, name: 'Milo Blends', img: 'milo-p.png', price: 17000 },
         { id: 8, name: 'Caramel Machiato', img: 'caramel-p.png', price: 20000 },
         { id: 9, name: 'Coklat Original', img: 'chocolate-p.png', price: 15000 },
         { id: 10, name: 'Teh Tarik Blends', img: 'teh-tarik-p.png', price: 17000 },
         { id: 11, name: 'Hot Cappucino', img: 'hot-cappucino-p.jpg', price: 10000 },
         { id: 12, name: 'Thai Tea', img: 'thai-tea-p.png', price: 15000 },
         { id: 13, name: 'Lemon Tea', img: 'lemon-tea-p.png', price: 17000 },
         { id: 14, name: 'Red Velvet', img: 'red-velvet-p.png', price: 12000 },
         { id: 15, name: 'Pop Ice Blends', img: 'pop-ice-p.png', price: 12000 },
         { id: 16, name: 'Soda Susu Ceria', img: 'soda-p.png', price: 17000 },
         { id: 17, name: 'Nutrisari Salju Blends', img: 'nutrisari-p.png', price: 15000 },
         { id: 18, name: 'Josua', img: 'extrajoss-p.png', price: 10000 },
       ],
    }));


    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // check apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);


            // jika belum ada / cart masih kosong
            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;

            } else {
                // jka barang sudah ada, cek apakah barang beda atau sama dengan barang yang ada di cart
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if(item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            // ambil item yang mau di remove
            const cartItem = this.items.find((item) => item.id === id);

            // jka barang lebih dari 1
            if(cartItem.quantity > 1) {
                // Telusuri 1 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yang di klik
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1) {
                // jika barang nya sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });
});


// konversi ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};