import { Router } from 'express';
import { createAppointementSchema } from '../schemas';
import { authenticateMedicToken, authenticateReceptionistToken, validateBody } from '../middlewares';
import { createAppointement, deleteAppointement, getAllAppointementByClient,
     updateAppointement, deleteAllAppointementsByClient, getAllClientsAppointementByMedic } from '../controllers';

const appointementsRouter = Router();

appointementsRouter
    .get('/medic', authenticateMedicToken, getAllClientsAppointementByMedic)
    .all('/*', authenticateReceptionistToken)
    .get('/client/:id', getAllAppointementByClient)
    .post('/:medicIdNumber/:clientIdNumber', validateBody(createAppointementSchema), createAppointement)
    .put('/:id', validateBody(createAppointementSchema), updateAppointement)
    .delete('/:id', deleteAppointement)
    .delete('/client/:id', deleteAllAppointementsByClient);

export { appointementsRouter };
