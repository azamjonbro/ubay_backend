import Joi from 'joi';

export const productCreateJoi = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    code: Joi.string().required(),
    box_count: Joi.number().required(),
    residual: Joi.number().required(),
    category: Joi.string().required(),
    category_rout: Joi.string().required()
});

export const productUpdateJoi = Joi.object({
    title: Joi.string(),
    price: Joi.number(),
    code: Joi.string(),
    box_count: Joi.number(),
    residual: Joi.number(),
    category: Joi.string(),
    category_rout: Joi.string()
});