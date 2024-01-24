import { Request, Response } from "express";
import { UserUseCase } from "./getUsersUseCase";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUsersUseCase = new UserUseCase();

    const result = await getAllUsersUseCase.getAllUsers();

    return res.status(200).json(result);
  }
}

