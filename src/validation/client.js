import Joi from 'joi';

export const clientCreateJoi = Joi.object({
    chat_id: Joi.string().required(),
    phone_number: Joi.string().required(),
    username: Joi.string().required()
});