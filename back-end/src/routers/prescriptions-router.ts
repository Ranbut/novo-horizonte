import { Router } from 'express';
import { createPrescriptionSchema } from '../schemas';
import { authenticateMedicToken, validateBody } from '../middlewares';
import { createPrescription, deleteAllPrescriptionByUser, deletePrescription, getAllPrescriptionByUser, getPrescription } from '../controllers';

const prescriptionsRouter = Router();

prescriptionsRouter
    .all('/*', authenticateMedicToken)
    .get('/:id', getPrescription)
    .get('/client/:clientId', getAllPrescriptionByUser)
    .post('/client/:id', validateBody(createPrescriptionSchema), createPrescription)
    .delete('/:id', deletePrescription)
    .delete('/client/:clientId', deleteAllPrescriptionByUser);

export { prescriptionsRouter };