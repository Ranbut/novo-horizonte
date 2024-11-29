import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import medicsService from '../services/medics-service';
import { AuthenticatedMedicRequest, AuthenticatedReceptionistRequest } from '@/middlewares';

export async function getAllMedics(req: AuthenticatedReceptionistRequest, res: Response, next: NextFunction) {

  try {
    const medics = await medicsService.getAllMedics();
    return res.status(httpStatus.OK).send(medics);
  } catch (error) {
    next(error);
  }
}

export async function medicsPost(req: Request, res: Response, next: NextFunction) {
  const { name, cpf, birthday, password, adress, phone, email, specialty } = req.body;

  try {
    const medic = await medicsService.createMedic({ name, cpf, birthday, password, adress, phone, email, specialty });
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
  const { body } = req;

  try {
    await medicsService.medicUpdateInfo(medicId, body);
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}