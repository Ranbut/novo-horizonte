import { Report } from '@prisma/client';
import reportsRepository from '../../repositories/reports-repository';
import { notFoundError } from '@/errors';
import clientRepository from '@/repositories/clients-repository';

export async function getReport(medicId: number, reportId: number) {
  const report = await reportsRepository.findByMedicReportId(medicId, reportId);
  if (!report) throw notFoundError();

  return report;
}

export async function getAllReportsByClient(medicId: number, clientId: number) {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw notFoundError();

  const reports = await reportsRepository.getAllReportsByClient(medicId, clientId);

  if (!reports) throw notFoundError();

  return reports;
}

export async function createReport({ medicId, clientId, title, text }: CreateReportParams): Promise<Report> {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw notFoundError();

  return reportsRepository.create({
    medicId,
    clientId,
    title,
    text
  });
}

export async function editReport(medicId: number, reportId: number, title: string, text: string) {
  const report = await reportsRepository.findByMedicReportId(medicId, reportId);

  if (!report) throw notFoundError();

  return reportsRepository.editReport(reportId, title, text);
}

async function deleteReport(medicId: number, reportId: number) {
  const report = await reportsRepository.findByMedicReportId(medicId, reportId);

  if (!report) throw notFoundError();

  await reportsRepository.deleteReport(reportId);
}

async function deleteAllReportsByClient(medicId: number, clientId: number) {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw notFoundError();

  await reportsRepository.deleteAllReportsByClient(medicId, clientId);
}

export type CreateReportParams = Pick<Report, 'medicId' | 'clientId' | 'title' | 'text'>;

const reportsService = {
  getReport,
  getAllReportsByClient,
  createReport,
  editReport,
  deleteReport,
  deleteAllReportsByClient
};

export default reportsService;