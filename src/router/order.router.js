import { Router } from "express";
import validate from "../middleware/validate.js";
import { orderCreateJoi, orderUpdateJoi } from "../validation/order.js";
import { orderClear, orderCreate, orderList, orderUpdate, orderRemove } from "../controller/order.js";

export default Router()
    .get('/list/:user_id', orderList)
    .post('/create', validate(orderCreateJoi), orderCreate)
    .put('/update/:id', validate(orderUpdateJoi), orderUpdate)
    .delete('/clear/:user_id', orderClear)
    .delete('/delete/:id', orderRemove)