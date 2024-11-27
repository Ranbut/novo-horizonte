import 'reflect-metadata';
import 'express-async-errors';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from './config';
import { authenticationRouter, clientsRouter, receptionistRouter, medicsRouter, prescriptionsRouter,
   reportsRouter, appointementsRouter, examsRouter } from './routers';
import { handleApplicationErrors } from './middlewares';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req: Request, res: Response) => res.send('OK!'))
  .use('/clients', clientsRouter)
  .use('/receptionists', receptionistRouter)
  .use('/medics', medicsRouter)
  .use('/prescriptions', prescriptionsRouter)
  .use('/reports', reportsRouter)
  .use('/appointements', appointementsRouter)
  .use('/exams', examsRouter)
  .use('/auth', authenticationRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
