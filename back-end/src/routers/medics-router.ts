import { Router } from 'express';
import { createMedicSchema, updateInfoSchema } from '../schemas';
import { authenticateMedicToken, authenticateReceptionistToken, validateBody } from '../middlewares';
import { getAllMedics, medicsPost, getAllClientsByMedic, medicUpdateInfo } from '../controllers';

const medicsRouter = Router();

medicsRouter
    .get('/', authenticateReceptionistToken, getAllMedics)
    .post('/', validateBody(createMedicSchema), medicsPost)
    .all('/*', authenticateMedicToken)
    .get('/clients', getAllClientsByMedic)
    .put('/info', validateBody(updateInfoSchema), medicUpdateInfo);

export { medicsRouter };