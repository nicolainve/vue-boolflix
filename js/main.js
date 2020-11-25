const app = new Vue({
    el: '#app',
    data: {
        inputText: '',
        films: []
    },
    methods: {
        searchItem() {


            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '7ce64d05ee459f4b7de455e40f7bea40',
                    query: this.inputText,
                    language: 'it'
                }
            })
            .then(response => {
                this.films = response.data.results
            })
            .catch(error => {console.log(error)});
        }
    }
})