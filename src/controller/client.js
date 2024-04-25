import { Client } from "../model/client.js"
import response from "../utils/response.js"

export const clientGET = async (req, res) => {
    try {
        const { chat_id } = req.params

        const find = await Client.findOne({ chat_id })
        if (find) response({ res, status: 200, data: find })
        else response({ res, status: 404, msg: "Client Not found" })
    } catch (error) {
        response({ res, msg: error.message, status: 400, error: true })
    }
}

export const clientCreate = async (req, res) => {
    try {
        await Client.create(req.result)
        response({ res, msg: "Created", status: 201 })
    } catch (error) {
        response({ res, msg: error.message, status: 400, error: true })
    }
}