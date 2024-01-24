import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class UserUseCase {
  async getAllUsers(): Promise<{ id: string; }[]> {
    try {
      const users = await prisma.user.findMany({
        select: {
          username: true,
        },
      });

      // Mapear o resultado para o formato desejado
      const formattedUsers = users.map((user) => ({
        id: user.username,
      }));

      return formattedUsers;
    } catch (error) {
      console.error("Erro ao obter usuários:", error);
      throw new Error("Erro ao obter usuários.");
    }
  }
}
