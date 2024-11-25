import { Router } from 'express';
import { createUserSchema, updateInfoSchema } from '../schemas';
import { authenticateToken, validateBody } from '../middlewares';
import { receptionistPost, receptionistUpdateInfo } from '../controllers';

const receptionistRouter = Router();

receptionistRouter
    .post('/', validateBody(createUserSchema), receptionistPost)
    .all('/*', authenticateToken)
    .put('/:id/info', validateBody(updateInfoSchema), receptionistUpdateInfo);

export { receptionistRouter };
