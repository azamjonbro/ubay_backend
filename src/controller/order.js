import { Order } from "../model/order.js"
import response from "../utils/response.js"
import { ErrorHandle } from "../error/error_handler.js"

export const orderList = async (req, res) => {
    try {
        const { user_id } = req.params
        const result = await Order.find({ client_id: user_id })

        response({ res, status: 200, data: result })
    } catch (error) {
        console.log(error)
        response({ res, msg: error.message, status: 400, error: true })
    }
}

export const orderCreate = async (req, res) => {
    try {
        await Order.create({...req.result, count: 1})
        response({ res, msg: "Created", status: 201 })
    } catch (error) {
        response({ res, msg: error.message, status: 400, error: true })
    }
}

export const orderUpdate = async (req, res) => {
    try {
        const { status } = req.result
        const { id } = req.params

        const find = await findOne(id)
        find.count = status ? find.count + 1 : find.count ? find.count - 1 : find.count
        await Order.updateOne({_id: id}, find)

        response({ res, msg: "Updated", status: 200 })
    } catch (error) {
        response({ res, msg: error.message, status: 400, error: true })
    }
}

export const orderRemove = async(req, res) => {
    try {
        const { id } = req.params
        await Order.deleteOne({ _id: id });

        response({ res, msg: "Deleted", status: 204 })
    } catch (error) {
        response({ res, msg: error.message, status: 400, error: true })
    }
}

export const orderClear = async(req, res) => {
    try {
        const { user_id } = req.params
        const result = await Order.find({ client_id: user_id })
        await Order.deleteMany({ _id: { $in: result.map(e => e._id) } });

        response({ res, msg: "Deleted", status: 204 })
    } catch (error) {
        response({ res, msg: error.message, status: 400, error: true })
    }
}

async function findOne(_id) {
    const find = await Order.findOne({ _id })

    if (find) return find
    else throw new ErrorHandle(404, 'Order Not Found')
}
