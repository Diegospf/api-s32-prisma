import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";

export class MyListController {
  async addItemToList(req: Request, res: Response) {
    const { user_id, movie_id } = req.body;
    const numericMovieId = Number(movie_id);
    try {
      const newItem = await prisma.myList.create({
        data: { user_id, movie_id: numericMovieId },
      });

      return res.status(201).json(newItem);
    } catch (error) {
      console.error("Erro ao adicionar item à lista:", error);
      return res.status(500).json({ error: "Erro ao adicionar item à lista." });
    }
  }

  async removeItemFromList(req: Request, res: Response) {
    const { user_id, movie_id } = req.params;
    const numericMovieId = Number(movie_id);
    try {
      const item = await prisma.myList.findFirst({
        where: { user_id, movie_id: numericMovieId },
      });
      if (item) {
        const result = await prisma.myList.delete({
          where: { id: item.id },
        });
        if (result) {
          return res.status(200).json({ message: "Item removido com sucesso." });
        } else {
          return res.status(404).json({ error: "Item não encontrado na lista." });
        }
      }
      return res.status(404).json({ error: "Item não encontrado na lista." });
    } catch (error) {
      console.error("Erro ao remover item da lista:", error);
      return res.status(500).json({ error: "Erro ao remover item da lista." });
    }
  }

  async getItemsByUser(req: Request, res: Response) {
    const { user_id } = req.params;

    try {
      const items = await prisma.myList.findMany({
        where: { user_id },
      });

      return res.status(200).json(items);
    } catch (error) {
      console.error("Erro ao obter itens da lista:", error);
      return res.status(500).json({ error: "Erro ao obter itens da lista." });
    }
  }

  async checkItemInList(req: Request, res: Response) {
    const { user_id, movie_id } = req.params;
    const numericMovieId = Number(movie_id);
    try {
      const item = await prisma.myList.findFirst({
        where: { user_id, movie_id: numericMovieId },
      });

      return res.status(200).json({ isInList: !!item });
    } catch (error) {
      console.error("Erro ao verificar item na lista:", error);
      return res.status(500).json({ error: "Erro ao verificar item na lista." });
    }
  }
}
