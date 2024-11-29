import { Appointement } from '@prisma/client';
import appointementsRepository from '../../repositories/appointements-repository';
import clientRepository from '@/repositories/clients-repository';
import { appointementNotFoundError, clientNotFoundError, invalidAppointementDateError, medicNotFoundError } from '@/errors';
import medicsRepository from '@/repositories/medics-repository';

export async function getAllAppointementByClient(clientId: number) {
    const client = await clientRepository.findByID(clientId);
  
    if (!client) throw clientNotFoundError();

    return appointementsRepository.findAllAppointementByClientID(clientId);
}

export async function createAppointement({ clientId, medicId, appointementDate }: CreateAppointementParams): Promise<Appointement> {
    const medic = await medicsRepository.findByID(medicId)
  
    if (!medic) throw medicNotFoundError();
  
    const client = await clientRepository.findByID(clientId);
    
    if (!client) throw clientNotFoundError();

    const formatAppointementDate = new Date(appointementDate);
    const now = new Date();

    if (formatAppointementDate < now) { 
      throw invalidAppointementDateError();
    }

  return appointementsRepository.createAppointement({
    clientId,
    medicId,
    appointementDate: formatAppointementDate.toISOString()
  });
}

export async function updateAppointement(appointementId: number, appointementDate: string) {
  const appointement = await appointementsRepository.findAppointementByID(appointementId);
  
  if (!appointement) throw appointementNotFoundError();

  return appointementsRepository.updateAppointement(appointementId, appointementDate);
}

export async function deleteAppointement(appointementId: number) {
  const appointement = await appointementsRepository.findAppointementByID(appointementId);
  
  if (!appointement) throw appointementNotFoundError();

  return appointementsRepository.deleteAppointement(appointementId);
}

export async function deleteAllAppointementsByClient(clientId: number) {
  const client = await clientRepository.findByID(clientId);
  
  if (!client) throw clientNotFoundError();

  return appointementsRepository.deleteAllAppointementsByClient(clientId);
}

export type CreateAppointementParams = Pick<Appointement, 'clientId' | 'medicId' | 'appointementDate'>;

const appointementService = {
  getAllAppointementByClient,
  createAppointement,
  updateAppointement,
  deleteAppointement,
  deleteAllAppointementsByClient
};

export default appointementService;
