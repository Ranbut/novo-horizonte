import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import receptionistService from '../services/receptionist-service';
import { AuthenticatedRequest } from '@/middlewares';

export async function receptionistPost(req: Request, res: Response, next: NextFunction) {
  const { cpf, name, password } = req.body;

  try {
    const receptionist = await receptionistService.createReceptionist({ cpf, name, password });
    return res.status(httpStatus.CREATED).json({
      id: receptionist.id,
      cpf: receptionist.email,
      password: receptionist.password,
    });
  } catch (error) {
    next(error);
  }
}

export async function receptionistUpdateInfo(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { id } = req.params;
  const { adress, phone, email ,password } = req.body;

  try {
    await receptionistService.receptionistUpdateInfo(Number(id), adress, phone, email ,password);
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}