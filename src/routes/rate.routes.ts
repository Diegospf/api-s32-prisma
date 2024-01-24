import { Router } from "express";
import { RateController } from "../modules/rate/useCases/RateController";

const rateController = new RateController();
const rateRoutes = Router();

rateRoutes.post('/', rateController.rateMovie);
rateRoutes.get('/:user_id', rateController.getRatingsByUser);
rateRoutes.get('/movie/:movie_id', rateController.getRatingsByMovie);
rateRoutes.get('/:user_id/:movie_id', rateController.getRatingByMovieAndUser);

export { rateRoutes };
