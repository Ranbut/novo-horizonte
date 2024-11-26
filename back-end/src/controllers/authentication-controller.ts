import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import authenticationService from '../services/authentication-service';

export async function singInClientPost(req: Request, res: Response, next: NextFunction) {
  const { cpf, password } = req.body;

  try {
    const result = await authenticationService.signInClient({ cpf, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function singInReceptionistPost(req: Request, res: Response, next: NextFunction) {
  const { cpf, password } = req.body;

  try {
    const result = await authenticationService.signInReceptionist({ cpf, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function singInMedicPost(req: Request, res: Response, next: NextFunction) {
  const { cpf, password } = req.body;

  try {
    const result = await authenticationService.signInMedic({ cpf, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}