import Joi from 'joi';

export const orderCreateJoi = Joi.object({
    client_id: Joi.string().required(),
    product_id: Joi.string().required(),
});

export const orderUpdateJoi = Joi.object({
    status: Joi.boolean().required(),
});