import { Medic } from '@prisma/client';
import bcrypt from 'bcrypt';
import { duplicatedCPFError } from '../../errors/duplication-error';
import medicsRepository from '../../repositories/medics-repository';

export async function getAllMedics() {
  const medics = await medicsRepository.getAll()

  return medics;
}

export async function createMedic({ name, cpf, birthday, password, adress, phone, email, specialty }: CreateMedicParams): Promise<Medic> {
  await validateUniqueCPFOrFail(cpf);

  const hashedPassword = await bcrypt.hash(password, 12);

  return medicsRepository.create({
    cpf,
    name,
    birthday,
    email,
    adress,
    phone,
    specialty,
    password: hashedPassword,
  });
}

export async function medicUpdateInfo(medicId: number, body: any) {
  if (body.password) {
    const hashedPassword = await bcrypt.hash(body.password, 12);

    body.password = hashedPassword
  }

  await medicsRepository.updateInfo(medicId, body);
}

async function validateUniqueCPFOrFail(cpf: string) {
  const medicWithSameCPF = await medicsRepository.findByCPF(cpf);
  if (medicWithSameCPF) {
    throw duplicatedCPFError();
  }
}

export type CreateMedicParams = Pick<Medic, 'cpf' | 'name' | 'birthday' |'password' | 'email' | 'adress' | 'phone' | 'specialty'>;

const medicsService = {
    getAllMedics,
    createMedic,
    medicUpdateInfo
};

export default medicsService;
