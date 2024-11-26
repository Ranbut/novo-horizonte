import { Report } from '@prisma/client';
import reportsRepository from '../../repositories/reports-repository';
import { clientNotFoundError, reportNotFoundError } from '@/errors';
import clientRepository from '@/repositories/clients-repository';

export async function getReport(medicId: number, reportId: number) {
  const report = await reportsRepository.findByMedicReportId(medicId, reportId);
  if (!report) throw reportNotFoundError();

  return report;
}

export async function getAllReportsByClient(medicId: number, clientId: number) {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw clientNotFoundError();

  const reports = await reportsRepository.getAllReportsByClient(medicId, clientId);

  if (!reports) throw reportNotFoundError();

  return reports;
}

export async function createReport({ medicId, clientId, title, text }: CreateReportParams): Promise<Report> {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw clientNotFoundError();

  return reportsRepository.create({
    medicId,
    clientId,
    title,
    text
  });
}

export async function editReport(medicId: number, reportId: number, title: string, text: string) {
  const report = await reportsRepository.findByMedicReportId(medicId, reportId);

  if (!report) throw reportNotFoundError();

  return reportsRepository.editReport(reportId, title, text);
}

async function deleteReport(medicId: number, reportId: number) {
  const report = await reportsRepository.findByMedicReportId(medicId, reportId);

  if (!report) throw reportNotFoundError();

  await reportsRepository.deleteReport(reportId);
}

async function deleteAllReportsByClient(medicId: number, clientId: number) {
  const client = await clientRepository.findByID(clientId);

  if (!client) throw clientNotFoundError();

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