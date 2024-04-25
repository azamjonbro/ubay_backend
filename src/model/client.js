import mongoose from "mongoose";
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    chat_id: {
        type: Number,
        unique: true,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
});

export const Client = mongoose.model('client', clientSchema);
