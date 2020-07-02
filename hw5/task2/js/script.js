Vue.component('carousel-item',{
    props: ['slide'],
    template: `<div>
                <p><em>"{{slide.text}}"</em></p>
                <p class="author">{{slide.author}}</p>
        </div>`
});

Vue.component('carousel', {
    props: ['slides'],
    data: function() {
        return {
            activeSlider: 0
        }
    },
    template: `<div>
                <div class="controls">
                    <button @click="prevSlide()">Назад</button>
                    <button @click="nextSlide()">Вперед</button>
                </div>
                <div class="slider">
                    <carousel-item v-for="(slide, index) in slides"
                                :slide="slides[index]"
                                :key="slide.id"
                                v-show="activeSlider == slide.id"
                                class="slide">
                    </carousel-item>
                </div>
            </div>`,
    methods: {
        runCarousel: function() {
            let that = this;
            setInterval(function() {
                if (that.activeSlider == that.slides.length - 1) {
                    that.activeSlider = 0;
                }
                that.activeSlider++;
            }, 5000)
        },
        nextSlide: function() {
            let that = this;
            if (that.activeSlider == that.slides.length - 1) {
                that.activeSlider = 0;
            }
            that.activeSlider++;
        },
        prevSlide: function() {
            let that = this;
            that.activeSlider--;
        }
    },
    created() {
        this.runCarousel();
    }
});

let app = new Vue({
    el: '#app',
    data: {
        slidesList: [{
            id: 0,
            text:'Ты не несешь ответственности за то, чего ждут от тебя другие люди. Если от тебя ждут слишком многого, то это их ошибка, а не твоя вина.',
            author: 'Ричард Фейнман'
        }, {
            id: 1,
            text:'Я плохо представляю, что происходит с людьми: они учатся не путем понимания. Они учатся каким-то другим способом - путем механического запоминания или как-то иначе. Их знания так хрупки!',
            author: 'Ричард Фейнман'
        }, {
            id: 2,
            text:'Однажды я даже подумывал о том, чтобы принять наркотик, но испугался: я люблю думать и не хочу портить машину, которая помогает мне в этом.',
            author: 'Ричард Фейнман'
        }, {
            id: 3,
            text:'Главный принцип – не дурачить самого себя. А себя как раз легче всего одурачить. Здесь надо быть очень внимательным.',
            author: 'Ричард Фейнман'
        }]
    },

});
