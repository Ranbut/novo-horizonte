import { Client, Medic, Receptionist } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { invalidCredentialsError } from './errors';
import { exclude } from '../../utils/prisma-utils';
import clientRepository from '../../repositories/clients-repository';
import sessionRepository from '../../repositories/session-repository';
import medicsRepository from '@/repositories/medics-repository';
import receptionistRepository from '@/repositories/receptionist-repository';

async function signInClient(params: SignInClientParams): Promise<SignInClientResult> {
  const { cpf, password } = params;

  const client = await getClientOrFail(cpf);

  await validatePasswordOrFail(password, client.password);

  const token = await createClientSession(client.id);

  return {
    client: exclude(client, 'password'),
    token,
  };
}

async function signInReceptionist(params: SignInReceptionistParams): Promise<SignInReceptionistResult> {
  const { cpf, password } = params;

  const receptionist = await getReceptionistOrFail(cpf);

  await validatePasswordOrFail(password, receptionist.password);

  const token = await createReceptionistSession(receptionist.id);

  return {
    receptionist: exclude(receptionist, 'password'),
    token,
  };
}

async function signInMedic(params: SignInMedicParams): Promise<SignInMedicResult> {
  const { cpf, password } = params;

  const medic = await getMedicOrFail(cpf);

  await validatePasswordOrFail(password, medic.password);

  const token = await createMedicSession(medic.id);

  return {
    medic: exclude(medic, 'password'),
    token,
  };
}

async function getClientOrFail(cpf: string): Promise<GetClientOrFailResult> {
  const client = await clientRepository.findByCPF(cpf);
  if (!client) throw invalidCredentialsError();

  return client;
}

async function getReceptionistOrFail(cpf: string): Promise<GetReceptionistOrFailResult> {
  const receptionist = await receptionistRepository.findByCPF(cpf);
  if (!receptionist) throw invalidCredentialsError();

  return receptionist;
}

async function getMedicOrFail(cpf: string): Promise<GetMedicOrFailResult> {
  const medic = await medicsRepository.findByCPF(cpf);
  if (!medic) throw invalidCredentialsError();

  return medic;
}

async function createClientSession(clientId: number) {
  const token = jwt.sign({ clientId }, process.env.JWT_SECRET);
  await sessionRepository.createClient({
    token,
    clientId,
  });

  return token;
}

async function createReceptionistSession(receptionistId: number) {
  const token = jwt.sign({ receptionistId }, process.env.JWT_SECRET);
  await sessionRepository.createReceptionist({
    token,
    receptionistId,
  });

  return token;
}

async function createMedicSession(medicId: number) {
  const token = jwt.sign({ medicId }, process.env.JWT_SECRET);
  await sessionRepository.createMedic({
    token,
    medicId,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();  
}

export type SignInClientParams = Pick<Client, 'cpf' | 'password'>;
export type SignInReceptionistParams = Pick<Client, 'cpf' | 'password'>;
export type SignInMedicParams = Pick<Medic, 'cpf' | 'password'>;

export type SignInClientResult = {
  client: Pick<Client, 'id' | 'cpf'>;
  token: string;
};

export type SignInReceptionistResult = {
  receptionist: Pick<Receptionist, 'id' | 'cpf'>;
  token: string;
};

export type SignInMedicResult = {
  medic: Pick<Medic, 'id' | 'cpf'>;
  token: string;
};

type GetClientOrFailResult = Pick<Client, 'id' | 'cpf' | 'password'>;
type GetReceptionistOrFailResult = Pick<Receptionist, 'id' | 'cpf' | 'password'>;
type GetMedicOrFailResult = Pick<Medic, 'id' | 'cpf' | 'password'>;

const authenticationService = {
  signInClient,
  signInReceptionist,
  signInMedic
};

export default authenticationService;
export * from './errors';