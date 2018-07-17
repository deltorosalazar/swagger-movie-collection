const db = require('../../config/db')()

function getAllMovies (req, res, next) {
    res.json(
        { movies: db.find() }
    )
}

function saveMovie (req, res, next) {
    res.json({
        success: db.save(req.body),
        description: "Movie added!"
    })
}

function getOneMovie (req, res, next) {
    let id = req.swagger.params.id.value
    let movie = db.find(id)

    if (movie) {
        res.json(movie)
    } else {
        res.status(204).send()
    }
}

function updateMovie (req, res, next) {
    let id = req.swagger.params.id.value
    let movie = db.find(id)

    if (db.update(id, movie)) {
        res.json({
            success: 1,
            description: 'Movie updated!'
        })
    } else {
        res.status(204).send()
    }
}

function deleteMovie (req, res, next) {
    let id = req.swagger.params.id.value
    
    if (db.remove(id)) {
        res.json({
            success: 1,
            description: "Movie deleted!"
        })
    } else {
        
    }
}

module.exports = {
    getAllMovies,
    saveMovie,
    getOneMovie,
    updateMovie,
    deleteMovie
}