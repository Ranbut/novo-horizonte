import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import reportsService from '../services/reports-service';
import { AuthenticatedMedicRequest } from '@/middlewares';


export async function getReport(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { id } = req.params;

  try {
    const report = await reportsService.getReport(medicId, Number(id));
    return res.status(httpStatus.OK).send(report);
  } catch (error) {
    next(error);
  }
}

export async function getAllReportsByClient(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { clientId } = req.params;

  try {
    const reports = await reportsService.getAllReportsByClient(medicId, Number(clientId));
    return res.status(httpStatus.OK).send(reports);
  } catch (error) {
    next(error);
  }
}

export async function createReport(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { id } = req.params;
  const clientId: number = Number(id)

  const { title, text } = req.body;

  try {
    const report = await reportsService.createReport({ medicId, clientId, title, text });
    return res.status(httpStatus.CREATED).send(report);
  } catch (error) {
    next(error);
  }
}

export async function editReport(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { id } = req.params;

  const { title, text } = req.body;

  try {
    const report = await reportsService.editReport(medicId, Number(id), title, text);
    return res.status(httpStatus.OK).send(report);
  } catch (error) {
    next(error);
  }
}

export async function deleteReport(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;
  const { id } = req.params;

  try {
    await reportsService.deleteReport(medicId, Number(id));

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}


export async function deleteAllReportsByClient(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;
  const { clientId } = req.params;

  try {
    await reportsService.deleteAllReportsByClient(medicId, Number(clientId));

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}