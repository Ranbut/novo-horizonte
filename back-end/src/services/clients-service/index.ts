import { Client } from '@prisma/client';
import bcrypt from 'bcrypt';
import { duplicatedCPFError } from '../../errors/duplication-error';
import clientRepository from '../../repositories/clients-repository';

export async function createClient({ cpf, name, password, email, adress, phone }: CreateClientParams): Promise<Client> {
  await validateUniqueCPFOrFail(cpf);

  const hashedPassword = await bcrypt.hash(password, 12);

  return clientRepository.create({
    cpf,
    name,
    email,
    adress,
    phone,
    password: hashedPassword,
  });
}

export async function getClientMedics(clientId: number) {
  const medics = await clientRepository.findAllMedicsByAppointement(clientId);

  return medics;
}

export async function getClientReports(clientId: number) {
  const reports = await clientRepository.findAllReports(clientId);

  return reports;
}

export async function getClientAppointements(clientId: number) {
  const appointements = await clientRepository.findAllAppointements(clientId);

  return appointements;
}

export async function getClientPrescriptions(clientId: number) {
  const prescriptions = await clientRepository.findAllPrescriptions(clientId);

  return prescriptions;
}

export async function getClientExams(clientId: number) {
  const exams = await clientRepository.findAllExams(clientId);

  return exams;
}

export async function clientUpdateInfo(clientId: number, body: any) {
  if (body.password) {
    const hashedPassword = await bcrypt.hash(body.password, 12);

    body.password = hashedPassword
  }

  body.updatedAt = new Date();

  await clientRepository.updateInfo(clientId, body);
}

async function validateUniqueCPFOrFail(cpf: string) {
  const clientWithSameCPF = await clientRepository.findByCPF(cpf);
  if (clientWithSameCPF) {
    throw duplicatedCPFError();
  }
}

export type CreateClientParams = Pick<Client, 'cpf' | 'name' |'password' | 'email' | 'adress' | 'phone'>;

const clientService = {
  createClient,
  getClientMedics,
  getClientReports,
  getClientAppointements,
  getClientPrescriptions,
  getClientExams,
  clientUpdateInfo
};

export default clientService;
