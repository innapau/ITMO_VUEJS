let app = new Vue({
    el: '#app',
    data: {
        searchedText: '',
        searchedArticles: [],
        articles: [{
            title: 'Apple выкупила стартап Fleetsmith',
            url: 'https://rozetked.me/news/11795-apple-vykuipla-razrabotchika-korporativnogo-po-fleetsmith',
            img: './img/gqTiLFlgBX4c.jpg'
        }, {
            title: 'Возможный дизайн Samsung Galaxy Fold 2',
            url: 'https://rozetked.me/news/11793-vozmozhnyy-render-samsung-galaxy-fold-2',
            img: './img/AAs9aFyI00RN.jpg'
        }, {
            title: 'Звонко и по красоте: обзор iOS 14 beta',
            url: 'https://rozetked.me/reviews/11783-glavnye-novovvedeniya-ios-14',
            img: './img/YYtwAafjWW8l.jpg'
        }, {
            title: 'Segway всё. Компания сворачивает производство электроскутеров',
            url: 'https://rozetked.me/news/11787-segway-vse-kompaniya-svorachivaet-proizvodstvo',
            img: './img/IUR0Zb36HAlv.jpg'
        }, {
            title: 'Meizu готовит умные часы на собственной оболочке',
            url: 'https://rozetked.me/news/11786-meizu-gotovit-umnye-chasy-na-sobstvennoy-obolochke',
            img: './img/xvld9MLbPwUu.jpg'
        }, {
            title: 'Утечка: iPhone 12 получит новый адаптер питания мощностью 20 Вт',
            url: 'https://rozetked.me/news/11782-utechka-iphone-12-poluchit-novyy-adapter-pitaniya-moschnost-yu-20-vt',
            img: './img/MtlWTx3EVxHv.jpg'
        }, {
            title: 'Открыт предзаказ на новые Asus Zenbook 13 и Zenbook 14',
            url: 'https://rozetked.me/news/11759-otkryt-predzakaz-na-novye-asus-zenbook-13-i-zenbook-14',
            img: './img/vPa3DSU3Es9X.jpg'
        }]
    },
    computed: {
        isEmptyArray: function() {
            return this.searchedArticles.length > 0;
        }
    },
    methods: {
        renderResults: function() {
            let result = this.searchedArticles;
            result = [];
            let reg = RegExp(this.searchedText, 'i');
            for (let i = 0; i < this.articles.length; i++) {
                if (reg.test(this.articles[i].title)) {
                    result.push(this.articles[i]);
                }
            }
            return this.searchedArticles = result;
        }
    }
});
