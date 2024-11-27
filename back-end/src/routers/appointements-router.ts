import { Router } from 'express';
import { createAppointementSchema } from '../schemas';
import { authenticateReceptionistToken, validateBody } from '../middlewares';
import { createAppointement, deleteAppointement, getAllAppointementByClient, updateAppointement, deleteAllAppointementsByClient } from '../controllers';

const appointementsRouter = Router();

appointementsRouter
    .all('/*', authenticateReceptionistToken)
    .get('/client/:id', getAllAppointementByClient)
    .post('/:medicIdNumber/:clientIdNumber', validateBody(createAppointementSchema), createAppointement)
    .put('/:id', validateBody(createAppointementSchema), updateAppointement)
    .delete('/:id', deleteAppointement)
    .delete('/client/:id', deleteAllAppointementsByClient);

export { appointementsRouter };
