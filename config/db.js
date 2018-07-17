const crypto = require('crypto')

module.exports = function() {
    return {
        moviesList: [],

        save (movie) {
            movie.id = crypto.randomBytes(20).toString('hex')
            this.moviesList.push(movie)
            return 1
        },

        find (id) {
            if (id) {
                return this.moviesList.find(element => {
                    return element.id === id
                })
            } else {
                return this.moviesList
            }
        },

        remove (id) {
            let found = 0

            this.moviesList = this.moviesList.filter(element => {
                if (element.id === id) {
                    found = 1
                } else {
                    return element.id !== id
                }
            })

            return found
        },

        update (id, movie) {
            let movieIndex = this.moviesList.findIndex(element => {
                return element.id === id
            })

            if (movieIndex !== -1) {
                this.moviesList[movieIndex].title = movie.title
                this.moviesList[movieIndex].year = movie.year

                return 1
            } else {
                return 0
            }
        }




    }
}