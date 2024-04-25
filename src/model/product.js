import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    price: String,
    code: String,
    image: String,
    box_count: String,
    residual: String,
    category: String,
    category_rout: String,
});

export const Product = mongoose.model('product', productSchema);
