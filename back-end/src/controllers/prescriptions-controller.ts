import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import prescriptionService from '../services/prescriptions-service';
import { AuthenticatedMedicRequest } from '@/middlewares';

export async function createPrescription(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
    const { medicId } = req;

    const { id } = req.params;
    const clientId: number = Number(id)

    const { medications, description, expirationDate } = req.body;
  
    try {
      const prescription = await prescriptionService.createPrescription({medicId, clientId, medications, description, expirationDate});
      return res.status(httpStatus.CREATED).send(prescription);
    } catch (error) {
      next(error);
    }
  }