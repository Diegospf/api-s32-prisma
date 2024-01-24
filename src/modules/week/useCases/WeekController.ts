// /backend/src/controllers/weekController.ts

import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";

export class WeekController {
  async createWeek(req: Request, res: Response) {
    const { name, movies, year, user_id } = req.body;
    const numericYear = Number(year);
    try {
      const newWeek = await prisma.week.create({
        data: { name, movies, year: numericYear, user_id },
      });

      return res.status(201).json(newWeek);
    } catch (error) {
      console.error("Erro ao criar semana com filmes:", error);
      return res.status(500).json({ error: 'Erro ao criar semana com filmes.' });
    }
  }

  async getAllWeeks(req: Request, res: Response) {
    try {
      const weeks = await prisma.week.findMany({ orderBy: { year: 'desc' } });
      return res.status(200).json(weeks);
    } catch (error) {
      console.error("Erro ao obter semanas com filmes:", error);
      return res.status(500).json({ error: 'Erro ao obter semanas com filmes.' });
    }
  }

  async getWeeksByUsername(req: Request, res: Response) {
    const { username } = req.params;

    try {
      const weeks = await prisma.week.findMany({
        where: { user_id: username },
      });

      return res.status(200).json(weeks);
    } catch (error) {
      console.error("Erro ao obter semanas com filmes por username:", error);
      return res.status(500).json({ error: 'Erro ao obter semanas com filmes por username.' });
    }
  }

  async getWeeksByYear(req: Request, res: Response) {
    const { year } = req.params;

    try {
      const weeks = await prisma.week.findMany({
        where: { year: Number(year) },
      });

      return res.status(200).json(weeks);
    } catch (error) {
      console.error("Erro ao obter semanas com filmes por ano:", error);
      return res.status(500).json({ error: 'Erro ao obter semanas com filmes por ano.' });
    }
  }

  async removeWeek(req: Request, res: Response) {
    const { week_id } = req.params;

    try {
      const result = await prisma.week.delete({
        where: { id: Number(week_id) },
      });

      if (result) {
        return res.status(200).json({ message: 'Semana removida com sucesso.' });
      } else {
        return res.status(404).json({ error: 'Semana não encontrada.' });
      }
    } catch (error) {
      console.error("Erro ao remover semana com filmes:", error);
      return res.status(500).json({ error: 'Erro ao remover semana com filmes.' });
    }
  }
}
