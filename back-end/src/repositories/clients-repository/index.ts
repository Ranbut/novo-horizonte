import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

async function findByCPF(cpf: string) {
  return prisma.client.findUnique({
    where: {
      cpf,
    },
  });
}

async function findByID(id: number) {
  return prisma.client.findUnique({
    where: {
      id,
    },
  });
}

async function getAll() {
  return prisma.client.findMany({
    select: {
      id: true,
      name: true,
      cpf: true
    },
    orderBy:{
      name: 'asc'
    }
  });
}

async function findAllMedicsByAppointement(clientId: number) {
  return await prisma.appointement.findMany({
    where: {
      clientId
    },
    select: {
      Medic: {
        select: { 
          id: true,
          name: true,
          specialty: true
        }
      }
    },
    distinct: ['medicId'],
  });

}

async function findAllReports(clientId: number) {
  return await prisma.report.findMany({
    where: {
      clientId
    },
    include: {
      Medic: {
        select: { 
          id: true,
          name: true,
          specialty: true
        }
      }
    }
  });
}

async function findAllPrescriptions(clientId: number) {
  return await prisma.prescription.findMany({
    where: {
      clientId
    },
    include: {
      Medic: {
        select: { 
          id: true,
          name: true,
          specialty: true
        }
      }
    }
  });
}

async function findAllAppointements(clientId: number) {
  return await prisma.appointement.findMany({
    where: {
      clientId
    },
    include: {
      Medic: {
        select: { 
          id: true,
          name: true,
          specialty: true
        }
      }
    }
  });
}

async function findAllExams(clientId: number) {
  return await prisma.exam.findMany({
    where: {
      clientId
    },
    include: {
      Medic: {
        select: { 
          id: true,
          name: true,
          specialty: true
        }
      }
    }
  });
}

async function findAllClientsByMedicId(medicId: number) {
  return await prisma.appointement.findMany({
    where: {
      medicId
    },
    select: {
      Client: {
        select: { 
          id: true,
          name: true,
          cpf: true
        }
      }
    },
    distinct: ['clientId'],
  });
}

async function create(data: Prisma.ClientUncheckedCreateInput) {
  return prisma.client.create({
    data,
  });
}

async function updateInfo(id: number, body: any) {
  return prisma.client.update({
    where: {
      id
    },
    data: body
  });
}

const clientRepository = {
  findByCPF,
  findByID,
  getAll,
  create,
  findAllMedicsByAppointement,
  findAllReports,
  findAllPrescriptions,
  findAllAppointements,
  findAllExams,
  findAllClientsByMedicId,
  updateInfo
};

export default clientRepository;
