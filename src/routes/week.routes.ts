import { Router } from "express";
import { WeekController } from "../modules/week/useCases/WeekController";

const weekController = new WeekController();
const weekRoutes = Router();

weekRoutes.post('/', weekController.createWeek);
weekRoutes.get('/', weekController.getAllWeeks);
weekRoutes.get('/:username', weekController.getWeeksByUsername);
weekRoutes.get('/year/:year', weekController.getWeeksByYear);
weekRoutes.delete('/:week_id', weekController.removeWeek);

export { weekRoutes };