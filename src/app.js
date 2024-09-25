document.addEventListener('alpine:init', () => {
    Alpine.data('product', () => ({
        items: [
            { id: 1, name: 'Kopi Hitam', img: 'kopi-hitam.jpg', price: 7000},
            { id: 2, name: 'Matcha Green Tea', img: 'product2.jpg', price: 7000},
            { id: 3, name: 'Kopi Hitam', img: '1.img', price: 7000},
            { id: 4, name: 'Kopi Hitam', img: '1.img', price: 7000},
            { id: 5, name: 'Kopi Hitam', img: '1.img', price: 7000},

        ],


       
    }));
});