import { ApplicationError } from '../../protocols';

export function invalidCredentialsError(): ApplicationError {
  return {
    name: 'InvalidCredentialsError',
    message: 'CPF or Password are incorrect',
  };
}