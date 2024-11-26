import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';

import { unauthorizedError } from '../errors';
import { prisma } from '../config';

export async function authenticateClientToken(req: AuthenticatedClientRequest, res: Response, next: NextFunction) {
  const authHeader = req.header('Authorization');
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(' ')[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const { clientId } = jwt.verify(token, process.env.JWT_SECRET) as JWTClientPayload;

    const session = await prisma.session.findFirst({
      where: {
        token,
      },
    });
    if (!session) return generateUnauthorizedResponse(res);

    req.clientId = clientId;

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

export async function authenticateReceptionistToken(req: AuthenticatedReceptionistRequest, res: Response, next: NextFunction) {
  const authHeader = req.header('Authorization');
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(' ')[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const { receptionistId } = jwt.verify(token, process.env.JWT_SECRET) as JWTReceptionPayload;

    const session = await prisma.sessionReceptionist.findFirst({
      where: {
        token,
      },
    });
    if (!session) return generateUnauthorizedResponse(res);

    req.receptionistId = receptionistId;

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

export async function authenticateMedicToken(req: AuthenticatedMedicRequest, res: Response, next: NextFunction) {
  const authHeader = req.header('Authorization');
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(' ')[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const { medicId } = jwt.verify(token, process.env.JWT_SECRET) as JWTMedicPayload;

    const session = await prisma.sessionMedic.findFirst({
      where: {
        token,
      },
    });
    if (!session) return generateUnauthorizedResponse(res);

    req.medicId = medicId;

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export type AuthenticatedClientRequest = Request & JWTClientPayload;
export type AuthenticatedReceptionistRequest = Request & JWTReceptionPayload;
export type AuthenticatedMedicRequest = Request & JWTMedicPayload;

type JWTClientPayload = {
  clientId: number;
};

type JWTReceptionPayload = {
  receptionistId: number;
};

type JWTMedicPayload = {
  medicId: number;
};