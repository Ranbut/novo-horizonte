import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import userService from '../services/clients-service';

export async function usersPost(req: Request, res: Response, next: NextFunction) {
  const { cpf, password } = req.body;

  try {
    const user = await userService.createUser({ cpf, password });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      cpf: user.email,
      password: user.password,
    });
  } catch (error) {
    next(error);
  }
}
