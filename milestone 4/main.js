


const app = new Vue({
    el: "#app",
    data: {
        url: 'https://api.themoviedb.org/3/search/movie?api_key=46a2e7148cb4fb54efc7aa0f84fdd844&language=it-IT&query=',
        urlTv: 'https://api.themoviedb.org/3/search/tv?api_key=46a2e7148cb4fb54efc7aa0f84fdd844&language=it-IT&query=',
        urlCast: 'https://api.themoviedb.org/3/search/person?api_key=46a2e7148cb4fb54efc7aa0f84fdd844&language=en-US&page=1&include_adult=false&query=',
        moviesData: "",
        tvData:"",
        castData:"",
        search: "",
        searchTv: "",
        error: null,
    },

    methods: {
        searchMovies(){
            let query = this.search
            if(query === ""){
                query = "back+to"
            }
            axios
            .get(this.url + query)
            .then(resp =>{
                console.log(resp.data.results)
                this.moviesData = resp.data.results
            }).catch(e => {
                console.error(e);
                this.error = "sorry something went wrong !" + e;
            })

            axios.get(this.urlCast + query)
            .then(resp => {
                console.log(resp.data.results)
                this.castData = resp.data.results
                console.log(this.castData)
            })
            
        },

        searchTvShows(){
            let query = this.searchTv
            if(query === ""){
                query = "back+to"
            }
            axios
            .get(this.urlTv + query)
            .then(resp => {
                console.log(resp.data.results)
                this.tvData = resp.data.results
            })

            axios.get(this.urlCast + query)
            .then(resp => {
                console.log(resp.data.results)
                this.castData = resp.data.results
                console.log(this.castData)
            })

        },
 

    

        
    },

    mounted(){
    //    this.searchMovies()

    }
})