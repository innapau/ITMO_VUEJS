let app = new Vue({
    el: '#app',
    data: {
        displayedText: 'Отредактируй меня',
        inputText: '',
        showText: true
    },
    methods: {
        editText(){
            this.showText = !this.showText;
            this.inputText = this.displayedText;
            this.$nextTick(function(){
                this.$refs.afterClick.focus();
                this.$refs.afterClick.select();
            })
        },
        editFinished() {
            this.showText = !this.showText;
            return this.displayedText = this.inputText;
        }
    }
});
