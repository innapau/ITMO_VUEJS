let app = new Vue({
    el: '#app',
    data: {
        selectedServices: [],
        services: [{
            name: 'Верстка базового сайта с адаптивным дизайном на CMS NetShaper',
            price: 8000
        }, {
            name: 'Верстка базового сайта с адаптивным дизайном на CMS WordPress или аналогичной',
            price: 14000
        }, {
            name: 'Верстка базового сайта с адаптивным дизайном на CMS 1С-Битрикс или аналогичной',
            price: 24000
        }, {
            name: 'Программирование функциональных элементов на JavaScript (калькулятор услуг, квизы и т.п.)',
            price: 6900
        }, {
            name: 'Разработка личного кабинета с регистрацией пользователей',
            price: 15000
        }, {
            name: 'Разработка и верстка структуры каталога',
            price: 8000
        }, {
            name: 'Разработка и верстка структуры интернет-магазина',
            price: 12500
        }, {
            name: 'Разработка и подключение Блога',
            price: 8000
        }, {
            name: 'Отзывы с премодерацией',
            price: 4800
        }, {
            name: 'Час работы Front-End программиста',
            price: 1200
        }, {
            name: 'Час работы Back-End программиста',
            price: 2400
        }]
    },
    computed: {
        countPrice() {
            let sum = 0;
            for(let i =0 ; i < this.selectedServices.length; i++){
                sum += this.selectedServices[i].price;
            }
            return sum;
        }
    },
    filters: {
        priceBeautifier(num) {
            let numStr = num.toString();
            let reg = new RegExp(/(?<=\d)(?=(\d{3})+(?!\d))/, 'g');
            let result = numStr.replace(reg, '.');
            return result + ' руб.';
        }
    }
});
