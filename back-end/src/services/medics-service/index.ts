import { Medic } from '@prisma/client';
import bcrypt from 'bcrypt';
import { duplicatedCPFError } from '../../errors/duplication-error';
import medicsRepository from '../../repositories/medics-repository';

export async function createMedic({ name, cpf, password, adress, phone, email, specialty }: CreateMedicParams): Promise<Medic> {
  await validateUniqueCPFOrFail(cpf);

  const hashedPassword = await bcrypt.hash(password, 12);

  return medicsRepository.create({
    cpf,
    name,
    email,
    adress,
    phone,
    specialty,
    password: hashedPassword,
  });
}

export async function medicUpdateInfo(medicId: number, adress: string, phone: string, email: string, password: string,) {
  const hashedPassword = await bcrypt.hash(password, 12);

  await medicsRepository.updateInfo(medicId, adress, phone, email, hashedPassword);
}

async function validateUniqueCPFOrFail(cpf: string) {
  const medicWithSameCPF = await medicsRepository.findByCPF(cpf);
  if (medicWithSameCPF) {
    throw duplicatedCPFError();
  }
}

export type CreateMedicParams = Pick<Medic, 'cpf' | 'name' |'password' | 'email' | 'adress' | 'phone' | 'specialty'>;

const medicsService = {
    createMedic,
    medicUpdateInfo
};

export default medicsService;
