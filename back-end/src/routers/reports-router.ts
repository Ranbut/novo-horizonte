import { Router } from 'express';
import { reportSchema } from '../schemas';
import { authenticateClientToken, authenticateMedicToken, validateBody } from '../middlewares';
import { createReport, deleteAllReportsByClient, deleteReport, editReport, getAllReportsByClient, getReport } from '../controllers';

const reportsRouter = Router();

reportsRouter
    .all('/*', authenticateMedicToken)
    .get('/:id', getReport)
    .get('/client/:clientId', getAllReportsByClient)
    .post('/client/:id/', validateBody(reportSchema), createReport)
    .put('/', validateBody(reportSchema), editReport)
    .delete('/:id', deleteReport)
    .delete('/client/:clientId', deleteAllReportsByClient);

export { reportsRouter };