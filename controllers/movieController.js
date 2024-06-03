import mongoose from "mongoose";
import Movie from '../models/MovieModel.js';
import { handleResponseSuccess, handleResponseError } from "../utils/response.js";

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        handleResponseSuccess(res, 200, 'Get movies successfully', {movies})
    } catch (error) {
        console.log('error', error)
        handleResponseError(res, 500, 'Internal Server Error')
    }
};

const getMovieById = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        handleResponseError(res, 400, 'Invalid movie id')
        return;
    }
    const checkMovieInDb = await Movie.findById(id)
    if(!checkMovieInDb) {
        handleResponseError(res, 404, 'Movie not found')
        return;
    }
    handleResponseSuccess(res, 200, 'Get movie successfully', {checkMovieInDb})
}

const createNewMovie = (req, res) => {
    res.send('createNewMovie')
};

const updateMovie = (req, res) => {
    res.send('updateMovie')
};

const deleteMovie = (req, res) => {
    res.send('deleteMovie')
};

export {getMovies, getMovieById, createNewMovie, updateMovie, deleteMovie}