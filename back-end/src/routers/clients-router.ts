import { Router } from 'express';
import { createUserSchema, updateInfoSchema } from '../schemas';
import { authenticateToken, validateBody } from '../middlewares';
import { clientsPost, clientUpdateInfo } from '../controllers';

const clientsRouter = Router();

clientsRouter
    .post('/', validateBody(createUserSchema), clientsPost)
    .all('/*', authenticateToken)
    .put('/info', validateBody(updateInfoSchema), clientUpdateInfo);

export { clientsRouter };
