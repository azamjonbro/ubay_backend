import { Router } from "express";
import clientRouter from "./client.router.js";
import adminCheck from "../middleware/admin.check.js";
import productRouter from "./product.router.js";
import orderRouter from "./order.router.js";

export default Router()
    .use('/client', clientRouter)
    .use('/product/:admin_id', adminCheck, productRouter)
    .use('/order/', orderRouter)