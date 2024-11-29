import { Router } from 'express';
import { createUserSchema, updateInfoSchema } from '../schemas';
import { authenticateClientToken, validateBody } from '../middlewares';
import { clientsPost, clientUpdateInfo, getClientAppointements, getClientMedics, getClientPrescriptions, getClientReports, getClientExams } from '../controllers';

const clientsRouter = Router();

clientsRouter
    .post('/', validateBody(createUserSchema), clientsPost)
    .all('/*', authenticateClientToken)
    .get('/medics', getClientMedics)
    .get('/reports', getClientReports)
    .get('/appointments', getClientAppointements)
    .get('/prescriptions', getClientPrescriptions)
    .get('/exams', getClientExams)
    .put('/info', validateBody(updateInfoSchema), clientUpdateInfo);

export { clientsRouter };
