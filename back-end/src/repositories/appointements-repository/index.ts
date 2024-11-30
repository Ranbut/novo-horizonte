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
  
  async function getAllClientsAppointementByMedic(medicId: number) {
    return await prisma.appointement.findMany({
      where: {
        medicId
      },
      include: {
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
    getAllClientsAppointementByMedic,
    createAppointement,
    updateAppointement,
    deleteAppointement,
    deleteAllAppointementsByClient
  };
  
export default appointementRepository;
  