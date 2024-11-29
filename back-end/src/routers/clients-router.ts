import { Router } from 'express';
import { createUserSchema, updateInfoSchema } from '../schemas';
import { authenticateClientToken, authenticateReceptionistToken, validateBody } from '../middlewares';
import { clientsPost, clientUpdateInfo, getClientAppointements, getClientMedics, getClientPrescriptions, getClientReports, getClientExams, getAllClients } from '../controllers';

const clientsRouter = Router();

clientsRouter
    .get('/', authenticateReceptionistToken, getAllClients)
    .post('/', validateBody(createUserSchema), clientsPost)
    .all('/*', authenticateClientToken)
    .get('/medics', getClientMedics)
    .get('/reports', getClientReports)
    .get('/appointments', getClientAppointements)
    .get('/prescriptions', getClientPrescriptions)
    .get('/exams', getClientExams)
    .put('/info', validateBody(updateInfoSchema), clientUpdateInfo);

export { clientsRouter };
