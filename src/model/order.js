import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    count: Number,
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    client_id: {
        type: Schema.Types.ObjectId,
        ref: 'client'
    },
});

export const Order = mongoose.model('order', orderSchema);
