import { Router } from 'express';
import { createUserSchema, updateInfoSchema } from '../schemas';
import { authenticateReceptionistToken, validateBody } from '../middlewares';
import { receptionistPost, receptionistUpdateInfo } from '../controllers';

const receptionistRouter = Router();

receptionistRouter
    .post('/', validateBody(createUserSchema), receptionistPost)
    .all('/*', authenticateReceptionistToken)
    .put('/info', validateBody(updateInfoSchema), receptionistUpdateInfo);

export { receptionistRouter };
