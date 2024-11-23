import { Router } from 'express';
import { createUserSchema } from '../schemas';
import { authenticateToken, validateBody } from '../middlewares';
import { usersPost } from '../controllers';

const clientsRouter = Router();

clientsRouter
    .post('/', validateBody(createUserSchema), usersPost)
    .all('/*', authenticateToken);

export { clientsRouter };
