import { ADMIN } from "../app.js";
import response from "../utils/response.js";

export default (req, res, next) => {
    try {
        const { admin_id } = req.params
        if (admin_id != ADMIN)  return response({res, status: 403, msg: 'you are not an admin!'});

        next()
    } catch (error) {
        console.log(error)
        next(error)
    }
}
