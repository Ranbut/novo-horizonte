import { Router } from 'express';
import { createPrescriptionSchema } from '../schemas';
import { authenticateMedicToken, validateBody } from '../middlewares';
import { createPrescription } from '../controllers';

const prescriptionsRouter = Router();

prescriptionsRouter
    .all('/*', authenticateMedicToken)
    .post('/:id', validateBody(createPrescriptionSchema), createPrescription);

export { prescriptionsRouter };