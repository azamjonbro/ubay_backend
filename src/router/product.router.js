import { Router } from "express";
import { productCreateJoi } from "../validation/product.js";
import { getListWithCategory, productCreate, productCreateJSON, updateImages, updateJSON } from "../controller/product.js";
import { upload } from "../utils/multer.js";
import { uploadZip } from "../utils/upload.js";
import validate from "../middleware/validate.js";

export default Router()
    .get('/list', getListWithCategory)
    .post('/create', upload.single('image'), validate(productCreateJoi), productCreate)
    .post('/create-json-file', uploadZip.single('json'), productCreateJSON)
    .put('/update-image-folder', uploadZip.single('zip'), updateImages)
    .put('/update-json-file', uploadZip.single('json'), updateJSON)