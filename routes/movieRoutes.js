import express from 'express';
import { auth, authAdmin } from '../middlewares/auth.js';
import { createNewMovie, deleteMovie, getMovieById, getMovies, updateMovie } from '../controllers/movieController.js';

const router = express.Router();

router.get('/', auth, getMovies)

router.get('/:id', auth, getMovieById)

router.post('/', auth, authAdmin, createNewMovie)

router.put('/', auth, authAdmin, updateMovie)

router.delete('/', auth, authAdmin, deleteMovie)

export {router as movieRoutes}