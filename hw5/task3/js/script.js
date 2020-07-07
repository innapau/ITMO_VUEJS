Vue.component('gallery-item',{
    props: ['image'],
    template: `<div>
                    <h5>{{image.title}}</h5>
                    <img :src="image.url">
                    <button class="delete-button" @click="$emit('remove')">X</button>
    </div>`
});

Vue.component('gallery', {
    props: ['gallery', 'new-item'],
    data: function() {
        return {
            title: '',
            url: ''
        }
    },
    template: `<div>
                    <div class="gallery_add">
                        <div>
                            <input type="text" placeholder="Название изображения" class="adding-input" v-model="title">
                            <input type="text" placeholder="Ссылка на изображение" class="adding-input" v-model="url">
                        </div>
                        <button class="add-button" @click="$emit('add', title, url)">Добавить в галерею</button>
                    </div>
                    <gallery-item
                        v-for="(img, index) in gallery"
                        :key="img.id"
                        :image="img"
                        @remove="$emit('passid', index)"
                        class="unit_container">
                    </gallery-item>
    </div>`
});

let app = new Vue({
    el: '#app',
    data: {
        sitename: 'StanceNation Japan G Edition Fukushima 2019 // Part 3.',
        pictures: [{
            id: 1,
            title: 'Nissan GTI',
            url:'https://www.stancenation.com/wp-content/uploads/2019/12/StanceNation-Japan-G-Edition-fukushima-2019-1-2.jpg'
        }, {
            id: 2,
            title: 'BMW e36',
            url:'https://www.stancenation.com/wp-content/uploads/2019/12/StanceNation-Japan-G-Edition-fukushima-2019-140-1.jpg'
        }, {
            id: 3,
            title: 'Subaru WRX',
            url:'https://www.stancenation.com/wp-content/uploads/2019/12/StanceNation-Japan-G-Edition-fukushima-2019-139-1.jpg'
        }, {
            id: 4,
            title: 'Toyota GT86',
            url:'https://www.stancenation.com/wp-content/uploads/2019/12/StanceNation-Japan-G-Edition-fukushima-2019-138-1.jpg'
        }, {
            id: 5,
            title: 'Toyota GT86',
            url:'https://www.stancenation.com/wp-content/uploads/2019/12/StanceNation-Japan-G-Edition-fukushima-2019-137-1.jpg'
        }, {
            id: 6,
            title: 'Audi A5',
            url:'https://www.stancenation.com/wp-content/uploads/2019/12/StanceNation-Japan-G-Edition-fukushima-2019-132-1.jpg'
        }, {
            id: 7,
            title: 'Mercedes CLA',
            url:'https://www.stancenation.com/wp-content/uploads/2019/12/StanceNation-Japan-G-Edition-fukushima-2019-129-1.jpg'
        }, {
            id: 8,
            title: 'Nissan Skyline',
            url:'https://www.stancenation.com/wp-content/uploads/2019/12/StanceNation-Japan-G-Edition-fukushima-2019-127-1.jpg'
        }, {
            id: 9,
            title: 'Honda Civic',
            url:'https://www.stancenation.com/wp-content/uploads/2019/12/StanceNation-Japan-G-Edition-fukushima-2019-119-1.jpg'
        }]
    },
    methods: {
        deletePicture(index) {
            this.pictures.splice(index, 1);
        },
        addPicture(name, link) {
            this.pictures.push({
                id: this.pictures.length + 1,
                title: name,
                url: link
            })
        }
    }
});
