import { Receptionist } from '@prisma/client';
import bcrypt from 'bcrypt';
import { duplicatedCPFError } from '../../errors/duplication-error';
import receptionistRepository from '../../repositories/receptionist-repository';

export async function createReceptionist({ cpf, name, password }: CreateReceptionistParams): Promise<Receptionist> {
  await validateUniqueCPFOrFail(cpf);

  const hashedPassword = await bcrypt.hash(password, 12);

  return receptionistRepository.create({
    cpf,
    name,
    password: hashedPassword,
  });
}

export async function receptionistUpdateInfo(receptionistId: number,adress: string, phone: string, email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);

  await receptionistRepository.updateInfo(receptionistId, adress, phone, email, hashedPassword);
}

async function validateUniqueCPFOrFail(cpf: string) {
  const receptionistWithSameCPF = await receptionistRepository.findByCPF(cpf);
  if (receptionistWithSameCPF) {
    throw duplicatedCPFError();
  }
}

export type CreateReceptionistParams = Pick<Receptionist, 'cpf' | 'name' |'password'>;

const receptionistService = {
  createReceptionist,
  receptionistUpdateInfo
};

export default receptionistService;
