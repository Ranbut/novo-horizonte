import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import clientService from '../services/clients-service';
import { AuthenticatedClientRequest } from '@/middlewares';

export async function clientsPost(req: Request, res: Response, next: NextFunction) {
  const { cpf, name, email, adress, phone, password } = req.body;

  try {
    const client = await clientService.createClient({ cpf, name, password, email, adress, phone });
    return res.status(httpStatus.CREATED).json({
      id: client.id,
      cpf: client.cpf,
      password: client.password,
    });
  } catch (error) {
    next(error);
  }
}

export async function getClientMedics(req: AuthenticatedClientRequest, res: Response, next: NextFunction) {
  const { clientId } = req;

  try {
    const medics = await clientService.getClientMedics(clientId);
    return res.status(httpStatus.OK).send(medics);
  } catch (error) {
    next(error);
  }
}

export async function getClientReports(req: AuthenticatedClientRequest, res: Response, next: NextFunction) {
  const { clientId } = req;
  
  try {
    const reports = await clientService.getClientReports(clientId);
    return res.status(httpStatus.OK).send(reports);
  } catch (error) {
    next(error);
  }
}

export async function getClientAppointements(req: AuthenticatedClientRequest, res: Response, next: NextFunction) {
  const { clientId } = req;
  
  try {
    const appointements = await clientService.getClientAppointements(clientId);
    return res.status(httpStatus.OK).send(appointements);
  } catch (error) {
    next(error);
  }
}

export async function getClientPrescriptions(req: AuthenticatedClientRequest, res: Response, next: NextFunction) {
  const { clientId } = req;
  
  try {
    const prescriptions = await clientService.getClientPrescriptions(clientId);
    return res.status(httpStatus.OK).send(prescriptions);
  } catch (error) {
    next(error);
  }
}

export async function getClientExams(req: AuthenticatedClientRequest, res: Response, next: NextFunction) {
  const { clientId } = req;
  
  try {
    const exams = await clientService.getClientExams(clientId);
    return res.status(httpStatus.OK).send(exams);
  } catch (error) {
    next(error);
  }
}

export async function clientUpdateInfo(req: AuthenticatedClientRequest, res: Response, next: NextFunction) {
  const { clientId } = req;
  const { body } = req;

  try {
    await clientService.clientUpdateInfo(clientId, body);
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}