import { Client } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { invalidCredentialsError } from './errors';
import { exclude } from '../../utils/prisma-utils';
import clientRepository from '../../repositories/clients-repository';
import sessionRepository from '../../repositories/session-repository';

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { cpf, password } = params;

  const client = await getClientOrFail(cpf);

  await validatePasswordOrFail(password, client.password);

  const token = await createSession(client.id);

  return {
    client: exclude(client, 'password'),
    token,
  };
}

async function getClientOrFail(cpf: string): Promise<GetClientOrFailResult> {
  const client = await clientRepository.findByCPF(cpf);
  if (!client) throw invalidCredentialsError();

  return client;
}

async function createSession(clientId: number) {
  const token = jwt.sign({ clientId }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    clientId,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();  
}

export type SignInParams = Pick<Client, 'cpf' | 'password'>;

export type SignInResult = {
  client: Pick<Client, 'id' | 'cpf'>;
  token: string;
};

type GetClientOrFailResult = Pick<Client, 'id' | 'cpf' | 'password'>;

const authenticationService = {
  signIn
};

export default authenticationService;
export * from './errors';