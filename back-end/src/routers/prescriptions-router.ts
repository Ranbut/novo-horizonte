import { Router } from 'express';
import { createPrescriptionSchema } from '../schemas';
import { authenticateClientToken, authenticateMedicToken, validateBody } from '../middlewares';
import { createPrescription, deleteAllPrescriptionByUser, deletePrescription, getAllPrescriptionByUser, getPrescription, requestRenewPrescription } from '../controllers';

const prescriptionsRouter = Router();

prescriptionsRouter
    .put('/renew/:id', authenticateClientToken, requestRenewPrescription)
    .all('/*', authenticateMedicToken)
    .get('/:id', getPrescription)
    .get('/client/:clientId', getAllPrescriptionByUser)
    .post('/client/:id', validateBody(createPrescriptionSchema), createPrescription)
    .delete('/:id', deletePrescription)
    .delete('/client/:clientId', deleteAllPrescriptionByUser);

export { prescriptionsRouter };