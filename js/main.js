const app = new Vue({
    el: '#app',
    data: {
        inputText: '',
        films: [],
        tvs: [],
        language: '',
        languages: []
    },
    created() {
        axios.get('https://pkgstore.datahub.io/core/language-codes/language-codes_json/data/97607046542b532c395cf83df5185246/language-codes_json.json')
        .then(response => {
            this.languages = response.data
            console.log(this.languages);
        })
        .catch(error => { console.log(error)})
    },
    methods: {
        searchItem() {
            if (this.inputText.length > 0) {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '7ce64d05ee459f4b7de455e40f7bea40',
                        query: this.inputText,
                        language: this.language
                    }
                })
                .then(response => {
                    this.films = response.data.results
                })
                .catch(error => {console.log(error)});

                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '7ce64d05ee459f4b7de455e40f7bea40',
                        query: this.inputText,
                        language: this.language
                    }
                })
                .then(response => {
                    this.tvs = response.data.results
                })
                .catch(error => {console.log(error)});
            }
        },
        getStars(vote) {
            return Math.ceil(vote / 2)
        }
    }
});