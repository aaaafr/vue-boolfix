// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) 
// in cui possiamo scrivere completamente o parzialmente il nome di un film. 
// Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// Titolo
// Titolo Originale
// Lingua
// Voto
// Milestone 2:
// Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
// Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query,
//  sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
// Qui un esempio di chiamata per le serie tv:
// https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
// Consigli:
// Andate in fila, seguendo le milestone, non pensate all’interfaccia grafica fino al punto 4
// Non pensate all’interfaccia grafica fino al punto 4 (si, l’ho scritto due volte), tutto può essere risolto con una <ul> non stilizzata
// Ricordatevi quanto imparato finora con le diverse esercitazioni:
// Affrontate sempre prima il caso base minimo, senza complicazioni (ad es. “Se il titolo originale è uguale al titolo, magari dovrei nasconderlo”, “Se faccio una ricerca che non ha nessun risultato dovrei scrivere qualcosa” sono domande da NON FARSI fino a quando non si è fatto completamente un caso base)
// Se ti viene volta di copiare/incollare codice, NON FARLO, fai una funzione! Quei pochi minuti risparmiati renderanno il tuo codice meno leggibile ed ogni volta che dovrai intervenire su quella parte perderai molto più tempo
// Prima di andare avanti, assicurati di aver risolto quella parte nel miglior modo possibile (codice non ripetuto, minimo codice possibile, funzioni chiare e riutilizzabili). Risparmierai tantissimo tempo risolvendo gli esercizi successivi
// Meglio risolvere una milestone in meno, ma con codice scritto bene
// 4. Per avere la lista delle lingue utilizzare: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes


const app = new Vue({
    el: "#app",
    data: {
        url: 'https://api.themoviedb.org/3/search/movie?api_key=46a2e7148cb4fb54efc7aa0f84fdd844&language=it-IT&query=',
        moviesData: "",
        search: "",
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
            
        }
    },

    mounted(){
    //    this.searchMovies()

    }
})