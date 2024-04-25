import response from "../utils/response.js";

export default (schema) => {
    return (req, res, next) => {
        try {
            const { error, value } = schema.validate(req.body)
            if (error)  return response({res, status: 400, msg: error?.message});

            req.result = value
            next()
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}
