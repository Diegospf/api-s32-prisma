// /backend/src/controllers/s32ListController.ts

import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";

export class S32ListController {
  async addMovieToList(req: Request, res: Response) {
    const { movie_id } = req.body;
    const numericMovieId = Number(movie_id);
    try {
      const newMovie = await prisma.s32List.create({
        data: { movie_id: numericMovieId },
      });

      return res.status(201).json(newMovie);
    } catch (error) {
      console.error("Erro ao adicionar filme à lista S32:", error);
      return res.status(500).json({ error: 'Erro ao adicionar filme à lista S32.' });
    }
  }

  async getAllMovies(req: Request, res: Response) {
    try {
      const movies = await prisma.s32List.findMany();
      return res.status(200).json(movies);
    } catch (error) {
      console.error("Erro ao obter filmes da lista S32:", error);
      return res.status(500).json({ error: 'Erro ao obter filmes da lista S32.' });
    }
  }

  async removeMovieFromList(req: Request, res: Response) {
    const { movie_id } = req.params;
    const numericMovieId = Number(movie_id);

    try {
      const item = await prisma.s32List.findFirst({
        where: { movie_id: numericMovieId },
      });
      if (item) {
        const result = await prisma.s32List.delete({
          where: { id: item.id },
        });
        if (result) {
          return res.status(200).json({ message: 'Filme removido com sucesso.' });
        } else {
          return res.status(404).json({ error: 'Filme não encontrado na lista S32.' });
        }
      }
      return res.status(404).json({ error: 'Filme não encontrado na lista S32.' });
    } catch (error) {
      console.error("Erro ao remover filme da lista S32:", error);
      return res.status(500).json({ error: 'Erro ao remover filme da lista S32.' });
    }
  }

  async checkMovieInList(req: Request, res: Response) {
    const { movie_id } = req.params;
    const numericMovieId = Number(movie_id);

    try {
      const movie = await prisma.s32List.findFirst({
        where: { movie_id: numericMovieId },
      });

      return res.status(200).json({ isInList: !!movie });
    } catch (error) {
      console.error("Erro ao verificar filme na lista S32:", error);
      return res.status(500).json({ error: 'Erro ao verificar filme na lista S32.' });
    }
  }
}
