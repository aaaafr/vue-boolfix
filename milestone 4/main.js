


const app = new Vue({
    el: "#app",
    data: {
        url: 'https://api.themoviedb.org/3/search/movie?api_key=46a2e7148cb4fb54efc7aa0f84fdd844&language=it-IT&query=',
        urlTv: 'https://api.themoviedb.org/3/search/tv?api_key=46a2e7148cb4fb54efc7aa0f84fdd844&language=it-IT&query=',
        moviesData: "",
        tvData:"",
        search: "",
        searchTv: "",
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

        },

    

        
    },

    mounted(){
    //    this.searchMovies()

    }
})