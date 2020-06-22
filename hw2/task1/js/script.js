let app = new Vue({
    el: '#app',
    data: {
        visible: false,
        title: 'Cyberpunk 2077 is Getting a Comic Book Series',
        img: './img/cyberpunk-2077-comic-book.jpg'
    },
    methods: {
        showText: function() {
            this.visible = !this.visible;
        }
    }
});
