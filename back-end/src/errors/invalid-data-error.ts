import { ApplicationError } from '@/protocols';

export function invalidDataError(details: string[]): ApplicationInvalidateDataError {
  return {
    name: 'InvalidDataError',
    message: 'Invalid data',
    details,
  };
}

export function invalidAppointementDateError(): ApplicationError {
  return {
    name: 'invalidDataError',
    message: 'The Appointement Date is set in the past instead of the future!',
  };
}

type ApplicationInvalidateDataError = ApplicationError & {
  details: string[];
};
