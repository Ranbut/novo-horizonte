import Joi from 'joi';

export const createAppointementSchema = Joi.object({
    appointementDate: Joi.date().required(),
  });