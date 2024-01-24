import { Router } from "express";
import { GetAllUsersController } from "../modules/users/useCases/getUsers/getAllUsersController";
import { LoginController } from "../modules/users/useCases/loginController/LoginrController";

const getAllUsersUseCase = new GetAllUsersController();
const loginController = new LoginController();
const userRoutes = Router();

userRoutes.get("/", getAllUsersUseCase.handle);
userRoutes.post("/login", loginController.handle);

export { userRoutes };
