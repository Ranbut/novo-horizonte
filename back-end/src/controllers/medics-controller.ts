import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import medicsService from '../services/medics-service';
import { AuthenticatedMedicRequest } from '@/middlewares';

export async function medicsPost(req: Request, res: Response, next: NextFunction) {
  const { name, cpf, password, adress, phone, email, specialty } = req.body;

  try {
    const medic = await medicsService.createMedic({ name, cpf, password, adress, phone, email, specialty });
    return res.status(httpStatus.CREATED).json({
      id: medic.id,
      cpf: medic.cpf,
      password: medic.password,
    });
  } catch (error) {
    next(error);
  }
}

export async function medicUpdateInfo(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;
  const { adress, phone, email, password } = req.body;

  try {
    await medicsService.medicUpdateInfo(medicId, adress, phone, email, password);
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}