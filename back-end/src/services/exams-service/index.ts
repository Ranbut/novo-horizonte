import { Exam } from '@prisma/client';
import examsRepository from '../../repositories/exams-repository';
import { clientNotFoundError, examNotFoundError } from '@/errors';
import clientRepository from '@/repositories/clients-repository';

export async function getExam(medicId: number, examId: number) {
  const exam = await examsRepository.findByMedicExamId(medicId, examId);
  if (!exam) throw examNotFoundError();

  return exam;
}

export async function getAllExamsByClient(medicId: number, clientId: number) {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw clientNotFoundError();

  const exams = await examsRepository.getAllExamsByClient(medicId, clientId);

  if (!exams) throw examNotFoundError();

  return exams;
}

export async function createExam({ medicId, clientId, title, text }: CreateExamParams): Promise<Exam> {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw clientNotFoundError();

  return examsRepository.create({
    medicId,
    clientId,
    title,
    text
  });
}

export async function editExam(medicId: number, examId: number, title: string, text: string) {
  const exam = await examsRepository.findByMedicExamId(medicId, examId);

  if (!exam) throw examNotFoundError();

  return examsRepository.editExam(examId, title, text);
}

async function deleteExam(medicId: number, examId: number) {
  const exam = await examsRepository.findByMedicExamId(medicId, examId);

  if (!exam) throw examNotFoundError();

  await examsRepository.deleteExam(examId);
}

async function deleteAllExamsByClient(medicId: number, clientId: number) {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw clientNotFoundError();

  await examsRepository.deleteAllExamsByClient(medicId, clientId);
}

export type CreateExamParams = Pick<Exam, 'medicId' | 'clientId' | 'title' | 'text'>;

const examsService = {
  getExam,
  getAllExamsByClient,
  createExam,
  editExam,
  deleteExam,
  deleteAllExamsByClient
};

export default examsService;