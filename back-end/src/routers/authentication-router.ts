import { Router } from 'express';
import { singInClientPost, singInMedicPost, singInReceptionistPost } from '../controllers';
import { validateBody } from '../middlewares';
import { signInSchema } from '../schemas';

const authenticationRouter = Router();

authenticationRouter.post('/sign-in/clients', validateBody(signInSchema), singInClientPost);
authenticationRouter.post('/sign-in/receptionists', validateBody(signInSchema), singInReceptionistPost);
authenticationRouter.post('/sign-in/medics', validateBody(signInSchema), singInMedicPost);

export { authenticationRouter };