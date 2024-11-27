import { Router } from 'express';
import { examSchema } from '../schemas';
import { authenticateMedicToken, validateBody } from '../middlewares';
import { createExam, deleteAllExamsByClient, deleteExam, editExam, getAllExamsByClient, getExam } from '../controllers';

const examsRouter = Router();

examsRouter
    .all('/*', authenticateMedicToken)
    .get('/:id', getExam)
    .get('/client/:clientId', getAllExamsByClient)
    .post('/client/:id/', validateBody(examSchema), createExam)
    .put('/', validateBody(examSchema), editExam)
    .delete('/:id', deleteExam)
    .delete('/client/:clientId', deleteAllExamsByClient);

export { examsRouter };