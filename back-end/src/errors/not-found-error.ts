import { ApplicationError } from '@/protocols';

export function notFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'No result for this search!',
  };
}

export function clientNotFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'No result for the client selected!',
  };
}

export function medicNotFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'No result for the medic selected!',
  };
}

export function receptionistNotFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'No result for the receptionist selected!',
  };
}

export function prescriptionNotFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'No result for the prescription selected!',
  };
}

export function reportNotFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'No result for the report selected!',
  };
}

export function appointementNotFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'No result for the appointement selected!',
  };
}