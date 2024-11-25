import { Router } from 'express';
import { createUserSchema } from '../schemas';
import { authenticateToken, validateBody } from '../middlewares';
import { clientsPost } from '../controllers';

const clientsRouter = Router();

clientsRouter
    .post('/', validateBody(createUserSchema), clientsPost)
    .all('/*', authenticateToken);

export { clientsRouter };
