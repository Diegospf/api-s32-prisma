// /backend/src/routes/myListRoutes.ts

import { Router } from "express";
import { MyListController } from "../modules/mylist/useCases/MyListController";

const myListController = new MyListController();
const myListRoutes = Router();

myListRoutes.post('/', myListController.addItemToList);
myListRoutes.get('/:user_id', myListController.getItemsByUser);
myListRoutes.delete('/:user_id/:movie_id', myListController.removeItemFromList);
myListRoutes.get('/check/:user_id/:movie_id', myListController.checkItemInList);

export { myListRoutes };
