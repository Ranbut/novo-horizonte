import { Router } from 'express';
import { createUserSchema, updateInfoSchema } from '../schemas';
import { authenticateClientToken, validateBody } from '../middlewares';
import { clientsPost, clientUpdateInfo } from '../controllers';

const clientsRouter = Router();

clientsRouter
    .post('/', validateBody(createUserSchema), clientsPost)
    .all('/*', authenticateClientToken)
    .put('/info', validateBody(updateInfoSchema), clientUpdateInfo);

export { clientsRouter };
