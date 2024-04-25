import { Router } from "express";
import { clientCreateJoi } from "../validation/client.js";
import { clientCreate, clientGET } from "../controller/client.js";
import validate from "../middleware/validate.js";

export default Router()
    .post('/create', validate(clientCreateJoi), clientCreate)
    .get('/check/:chat_id', clientGET)