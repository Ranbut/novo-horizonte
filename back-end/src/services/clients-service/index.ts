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

export async function clientUpdateInfo(clientId: number, adress: string, phone: string, email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);

  await clientRepository.updateInfo(clientId, adress, phone, email, hashedPassword);
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
  clientUpdateInfo
};

export default clientService;
