import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import receptionistService from '../services/receptionist-service';
import { AuthenticatedReceptionistRequest } from '@/middlewares';

export async function receptionistPost(req: Request, res: Response, next: NextFunction) {
  const { cpf, name, password } = req.body;

  try {
    const receptionist = await receptionistService.createReceptionist({ cpf, name, password });
    return res.status(httpStatus.CREATED).json({
      id: receptionist.id,
      cpf: receptionist.cpf,
      password: receptionist.password,
    });
  } catch (error) {
    next(error);
  }
}

export async function receptionistUpdateInfo(req: AuthenticatedReceptionistRequest, res: Response, next: NextFunction) {
  const { receptionistId } = req;
  const { body } = req;

  try {
    await receptionistService.receptionistUpdateInfo(receptionistId, body);
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}