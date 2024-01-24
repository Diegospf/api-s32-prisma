import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";
const jwt = require('jsonwebtoken');

export class LoginController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user || user.password !== password) {
      return response.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ userId: user.username, username: user.username }, 'seuSegredoDoToken', { expiresIn: '1h' });

    return response.status(200).json({ token });
  }
}
