import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

export async function findById(id: number) {
  return await prisma.report.findFirst({
    where: {
      id
    },
  });
}

export async function findByMedicReportId(medicId: number, reportId: number) {
  return await prisma.report.findFirst({
    where: {
      id: reportId,
      medicId
    },
  });
}

export async function getAllReportsByClient(medicId: number, clientId: number) {
  return await prisma.report.findMany({
    where: {
      medicId,
      clientId
    },
  });
}

async function create(data: Prisma.ReportUncheckedCreateInput) {
  return prisma.report.create({
    data,
  });
}

async function editReport(reportId: number, title: string, text: string) {
  return prisma.report.update({
    where: {
      id: reportId,
    },
    data: {
      title,
      text,
      updatedAt: new Date()
    },
  });
}

export async function deleteReport(id: number) {
  await prisma.report.delete({
    where: {
      id
    },
  });
}


export async function deleteAllReportsByClient(medicId: number, clientId: number) {
  return await prisma.report.deleteMany({
    where: {
      medicId,
      clientId
    },
  });
}

const prescriptionsRepository = {
  findById,
  findByMedicReportId,
  getAllReportsByClient,
  create,
  editReport,
  deleteReport,
  deleteAllReportsByClient
};

export default prescriptionsRepository;