document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Kopi Hitam', img: 'kopi-hitam-cr.jpg', price: 7000 },
            { id: 2, name: 'Matcha Greentea Prafe', img: 'matcha-cr.jpg', price: 17000 },
            { id: 4, name: 'Milkshake oreo blends Coklat dan Vanila', img: '1.img', price: 17000 },
            { id: 5, name: 'Cappucino Cincau Blends', img: '1.img', price: 17000 },
            { id: , name: 'Es Teh Manis', img: '1.img', price: 7000 },
            { id: , name: 'Es Jeruk Segar', img: '1.img', price: 10000 },
            { id: , name: 'Milo Blends', img: '1.img', price: 17000 },
            { id: , name: 'Caramel Machiato', img: '1.img', price: 20000 },
            { id: , name: 'Coklat Original', img: '1.img', price: 15000 },
            { id: , name: 'Teh Tarik Blends', img: '1.img', price: 17000 },
            { id: , name: 'Hot Cappucino', img: '1.img', price: 10000 },
            { id: , name: 'Thai Tea', img: '1.img', price: 15000 },
            { id: , name: 'Lemon Tea', img: '1.img', price: 17000 },
            { id: , name: 'Red Velvet', img: '1.img', price: 12000 },
            { id: , name: 'Pop Ice Blends', img: '1.img', price: 12000 },
            { id: , name: 'Soda Susu Ceria', img: '1.img', price: 17000 },
            { id: , name: 'Nutrisari Salju Blends', img: '1.img', price: 15000 },
            { id: , name: 'Josua', img: '1.img', price: 10000 },

        ],


       
    }));
});