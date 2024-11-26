import { Router } from 'express';
import { createMedicSchema, createPrescriptionSchema, updateInfoSchema } from '../schemas';
import { authenticateMedicToken, validateBody } from '../middlewares';
import { medicsPost, medicUpdateInfo } from '../controllers';

const medicsRouter = Router();

medicsRouter
    .post('/', validateBody(createMedicSchema), medicsPost)
    .all('/*', authenticateMedicToken)
    .put('/info', validateBody(updateInfoSchema), medicUpdateInfo);

export { medicsRouter };