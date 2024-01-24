// /backend/src/routes/s32ListRoutes.ts

import { Router } from "express";
import { S32ListController } from "../modules/s32list/useCases/S32ListController";

const s32ListController = new S32ListController();
const s32ListRoutes = Router();

s32ListRoutes.post('/', s32ListController.addMovieToList);
s32ListRoutes.get('/', s32ListController.getAllMovies);
s32ListRoutes.delete('/:movie_id', s32ListController.removeMovieFromList);
s32ListRoutes.get('/check/:movie_id', s32ListController.checkMovieInList);

export { s32ListRoutes };
