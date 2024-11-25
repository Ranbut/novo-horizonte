import { Client } from '@prisma/client';
import bcrypt from 'bcrypt';
import { duplicatedCPFError } from './errors';
import clientRepository from '../../repositories/clients-repository';

export async function createClient({ cpf, name, password }: CreateClientParams): Promise<Client> {
  await validateUniqueCPFOrFail(cpf);

  const hashedPassword = await bcrypt.hash(password, 12);

  return clientRepository.create({
    cpf,
    name,
    password: hashedPassword,
  });
}

async function validateUniqueCPFOrFail(cpf: string) {
  const clientWithSameCPF = await clientRepository.findByCPF(cpf);
  if (clientWithSameCPF) {
    throw duplicatedCPFError();
  }
}

export type CreateClientParams = Pick<Client, 'cpf' | 'name' |'password'>;

const clientService = {
  createClient
};

export * from './errors';
export default clientService;
