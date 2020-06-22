let showUser = new Vue({
    el: '#userProfile',
    data: {
        sitename: 'Профиль пользователя',
        users: [{
            firstName: 'Евгений',
            lastName: 'Семенов',
            login: 'jemmery',
            email: 'e.semenov@gmail.com',
            profilePicture: './img/profile_pictures/pic1.jpg',
            age: 22
        }, {
            firstName: 'Александр',
            lastName: 'Иванов',
            login: 'luckyguy',
            email: 'luckyguy@mail.ru',
            profilePicture: './img/profile_pictures/pic2.png',
            age: 16
        }, {
            firstName: 'Артем',
            lastName: 'Варламов',
            login: 'WhiteRanger',
            email: 'ranger.var@yahoo.com',
            profilePicture: 'none',
            age: 34
        }, {
            firstName: 'Елизавета',
            lastName: 'Комарова',
            login: 'rooooune',
            email: 'rooooune_g@gmail.com',
            profilePicture: './img/profile_pictures/pic3.jpg',
            age: 25
        }],
        count: 0
    },
    filters: {
        renderAge(num) {
            let ageVariation = ['год', 'лет', 'года'];
            let num1 = num % 10;
            let str = num.toString();

            if (num > 10 && num < 20) {
                return str + ' ' + ageVariation[1];
            }
            if (num1 > 1 && num1 < 5) {
                return str + ' ' + ageVariation[2];
            }
            if (num1 === 1) {
                return str + ' ' + ageVariation[0];
            }
            return str + ' ' + ageVariation[1];
        }
    },
    methods: {
        clickOne: function() {
          this.count--;
        },
        clickTwo: function() {
            if (this.count == this.users.length - 1) {
                this.count = 0;
            } else {
                this.count++;
            }
        }
    }
});
