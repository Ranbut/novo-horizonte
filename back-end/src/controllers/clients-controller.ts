import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import clientService from '../services/clients-service';

export async function clientsPost(req: Request, res: Response, next: NextFunction) {
  const { cpf, name, password } = req.body;

  try {
    const client = await clientService.createClient({ cpf, name, password });
    return res.status(httpStatus.CREATED).json({
      id: client.id,
      cpf: client.email,
      password: client.password,
    });
  } catch (error) {
    next(error);
  }
}
