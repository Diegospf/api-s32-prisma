import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";

export class RateController {
  async rateMovie(req: Request, res: Response) {
    const { user_id, movie_id, rate } = req.body;

    const numericMovieId = Number(movie_id);

    const existingRate = await prisma.rate.findFirst({
      where: { user_id, movie_id: numericMovieId },
    });

    if (existingRate) {
      const updatedRate = await prisma.rate.update({
        where: { id: existingRate.id },
        data: { rate },
      });

      return res.status(200).json(updatedRate);
    } else {
      const newRate = await prisma.rate.create({
        data: { user_id, movie_id: numericMovieId, rate },
      });

      return res.status(201).json(newRate);
    }
  }

  async getRatingsByUser(req: Request, res: Response) {
    const { user_id } = req.params;

    const ratings = await prisma.rate.findMany({
      where: { user_id },
    });

    return res.status(200).json(ratings);
  }

  async getRatingByMovieAndUser(req: Request, res: Response) {
    const { user_id, movie_id } = req.params;

    // Converta movie_id para número
    const numericMovieId = Number(movie_id);

    const rating = await prisma.rate.findFirst({
      where: { user_id, movie_id: numericMovieId },
    });

    if (!rating) {
      return res.status(404).json({ error: 'Avaliação não encontrada.' });
    }

    return res.status(200).json(rating);
  }

  async getRatingsByMovie(req: Request, res: Response) {
    const { movie_id } = req.params;

    // Converta movie_id para número
    const numericMovieId = Number(movie_id);

    const ratings = await prisma.rate.findMany({
      where: { movie_id: numericMovieId },
    });

    return res.status(200).json(ratings);
  }
}
