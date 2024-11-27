import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import examsService from '../services/exams-service';
import { AuthenticatedMedicRequest } from '@/middlewares';


export async function getExam(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { id } = req.params;

  try {
    const exam = await examsService.getExam(medicId, Number(id));
    return res.status(httpStatus.OK).send(exam);
  } catch (error) {
    next(error);
  }
}

export async function getAllExamsByClient(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { clientId } = req.params;

  try {
    const exams = await examsService.getAllExamsByClient(medicId, Number(clientId));
    return res.status(httpStatus.OK).send(exams);
  } catch (error) {
    next(error);
  }
}

export async function createExam(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { id } = req.params;
  const clientId: number = Number(id)

  const { title, text } = req.body;

  try {
    const exam = await examsService.createExam({ medicId, clientId, title, text });
    return res.status(httpStatus.CREATED).send(exam);
  } catch (error) {
    next(error);
  }
}

export async function editExam(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;

  const { id } = req.params;

  const { title, text } = req.body;

  try {
    const exam = await examsService.editExam(medicId, Number(id), title, text);
    return res.status(httpStatus.OK).send(exam);
  } catch (error) {
    next(error);
  }
}

export async function deleteExam(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;
  const { id } = req.params;

  try {
    await examsService.deleteExam(medicId, Number(id));

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}


export async function deleteAllExamsByClient(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const { medicId } = req;
  const { clientId } = req.params;

  try {
    await examsService.deleteAllExamsByClient(medicId, Number(clientId));

    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}