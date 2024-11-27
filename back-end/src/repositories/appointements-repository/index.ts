import { Prisma } from '@prisma/client';
import { prisma } from '../../config';

async function findAppointementByID(id: number) {
    return prisma.appointement.findUnique({
      where: {
        id
      },
    });
  }

  async function findAllAppointementByClientID(clientId: number) {
    return prisma.appointement.findMany({
      where: {
        clientId
      },
    });
  }
  
  async function createAppointement(data: Prisma.AppointementUncheckedCreateInput) {
    return prisma.appointement.create({
      data,
    });
  }
  
  async function updateAppointement(id: number, appointementDate: string) {
    return prisma.appointement.update({
      where: {
        id
      },
      data: {
        appointementDate,
        updatedAt: new Date()
      },
    });
  }
  
  async function deleteAppointement(id: number) {
    return prisma.appointement.delete({
      where: {
        id
      }
    });
  }

  async function deleteAllAppointementsByClient(clientId: number) {
    return prisma.appointement.deleteMany({
      where: {
        clientId
      }
    });
  }

const appointementRepository = {
    findAppointementByID,
    findAllAppointementByClientID,
    createAppointement,
    updateAppointement,
    deleteAppointement,
    deleteAllAppointementsByClient
  };
  
export default appointementRepository;
  