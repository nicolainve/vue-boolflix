const app = new Vue({
    el: '#app',
    data: {
        query: '',
        films: [],
        tvs: [],
        flags: ['it', 'en']
    },
    methods: {
        searchItem() {
            if (this.query.length > 0) {

                // Movie
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '7ce64d05ee459f4b7de455e40f7bea40',
                        query: this.query,
                        language: 'it'
                    }
                })
                .then(response => {
                    this.films = response.data.results
                })
                .catch(error => {console.log(error)});

                // TV
                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '7ce64d05ee459f4b7de455e40f7bea40',
                        query: this.query,
                        language: 'it'
                    }
                })
                .then(response => {
                    this.tvs = response.data.results
                })
                .catch(error => {console.log(error)});
            }
        },

        // Get stars
        getStars(vote) {
            return Math.ceil(vote / 2)
        },

        // Check Lang
        isLangFlag(lang) {
            return this.flags.includes(lang)
        },

        // Get Flag Image
        getFlag(lang) {
            return `./img/${lang}.png`
        }
    }
});