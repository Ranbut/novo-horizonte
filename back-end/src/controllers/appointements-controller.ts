import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import appointementService from '../services/appointements-service';
import { AuthenticatedReceptionistRequest } from '@/middlewares';

export async function getAllAppointementByClient(req: AuthenticatedReceptionistRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
  
    try {
      const appointements = await appointementService.getAllAppointementByClient(Number(id));
      return res.status(httpStatus.OK).send(appointements);
    } catch (error) {
      next(error);
    }
  }

export async function createAppointement(req: AuthenticatedReceptionistRequest, res: Response, next: NextFunction) {
    const { clientIdNumber, medicIdNumber } = req.params;
    const { appointementDate } = req.body;
  
    const clientId = Number(clientIdNumber);
    const medicId = Number(medicIdNumber);
  
    try {
      await appointementService.createAppointement({ clientId, medicId, appointementDate });
      return res.sendStatus(httpStatus.CREATED);
    } catch (error) {
      next(error);
    }
  }
  
  
  export async function updateAppointement(req: AuthenticatedReceptionistRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { appointementDate } = req.body;
  
    try {
      await appointementService.updateAppointement(Number(id), appointementDate);
      return res.sendStatus(httpStatus.OK);
    } catch (error) {
      next(error);
    }
  }
  
  
  export async function deleteAppointement(req: AuthenticatedReceptionistRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    
    try {
      await appointementService.deleteAppointement(Number(id));
      return res.sendStatus(httpStatus.OK);
    } catch (error) {
      next(error);
    }
  }