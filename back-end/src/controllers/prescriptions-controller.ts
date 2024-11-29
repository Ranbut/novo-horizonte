import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import prescriptionService from '../services/prescriptions-service';
import { AuthenticatedClientRequest, AuthenticatedMedicRequest } from '@/middlewares';


export async function getPrescription(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { id } = req.params;

  try {
    const prescription = await prescriptionService.getPrescription(medicId, Number(id));
    return res.status(httpStatus.OK).send(prescription);
  } catch (error) {
    next(error);
  }
}

export async function getAllPrescriptionByUser(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { clientId } = req.params;

  try {
    const prescriptions = await prescriptionService.getAllPrescriptionByUser(medicId, Number(clientId));
    return res.status(httpStatus.OK).send(prescriptions);
  } catch (error) {
    next(error);
  }
}

export async function createPrescription(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
    const { medicId } = req;

    const { id } = req.params;
    const clientId: number = Number(id)

    const { medications, description } = req.body;
  
    try {
      const prescription = await prescriptionService.createPrescription({medicId, clientId, medications, description });
      return res.status(httpStatus.CREATED).send(prescription);
    } catch (error) {
      next(error);
    }
}

export async function requestRenewPrescription(req: AuthenticatedClientRequest, res: Response, next: NextFunction) {
  const { clientId } = req;
  const { id } = req.params;
  try {
      await prescriptionService.requestRenewPrescription(clientId, Number(id));

      return res.sendStatus(httpStatus.OK);
  } catch (error) {
      console.log(error);
      next(error);
  }
}

export async function acceptRenewPrescription(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;
  const { id } = req.params;

  try {
      await prescriptionService.acceptRenewPrescription(medicId, Number(id));

      return res.sendStatus(httpStatus.OK);
  } catch (error) {
      console.log(error);
      next(error);
  }
}

export async function deletePrescription(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;
  const { id } = req.params;

  try {
      await prescriptionService.deletePrescription(medicId, Number(id));

      return res.sendStatus(httpStatus.OK);
  } catch (error) {
      next(error);
  }
}


export async function deleteAllPrescriptionByUser(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;
  const { clientId } = req.params;

  try {
      await prescriptionService.deleteAllPrescriptionByUser(medicId, Number(clientId));

      return res.sendStatus(httpStatus.OK);
  } catch (error) {
      next(error);
  }
}