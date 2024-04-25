import fs from 'fs'
import path from 'path'
import AdmZip from 'adm-zip'
import response from "../utils/response.js"
import { Product } from "../model/product.js"

export const productCreate = async (req, res) => {
    try {
        await Product.create({ ...req.result, image: req.result.code + '.jpeg' })
        response({ res, msg: "Created", status: 201 })
    } catch (error) {
        response({ res, msg: error.message, status: 400, error: true })
    }
}

export const productCreateJSON = async (req, res) => {
    try {
        const fileContent = JSON.parse(req.file.buffer.toString('utf8'));

        for (const value of fileContent)
            await Product.create({ ...value, image: value.code + '.jpeg' })

        response({ res, msg: "Created", status: 201 })
    } catch (error) {
        response({ res, msg: error.message, status: 400, error: true })
    }
}

export const updateImages = async (req, res) => {
    try {
        const extractDir = path.join(process.cwd(), 'src', 'uploads')

        if (!fs.existsSync(extractDir)) {
            fs.mkdirSync(extractDir)
        }
        const zipBuffer = req.file.buffer;
        const zip = new AdmZip(zipBuffer);
        const zipEntries = zip.getEntries();
        zipEntries.forEach((zipEntry) => {
            if (!zipEntry.isDirectory && /\.(jpg|jpeg|png|gif)$/i.test(zipEntry.entryName)) {
                const entryFileName = path.basename(zipEntry.entryName);
                const entryFilePath = path.join(extractDir, entryFileName);
                fs.writeFileSync(entryFilePath, zipEntry.getData());
            }
        })

        response({ res, msg: "Updated Images", status: 200 })
    } catch (error) {
        console.log(error)
        response({ res, msg: error.message, status: 400, error: true })
    }
}

export const updateJSON = async (req, res) => {
    try {
        const fileContent = JSON.parse(req.file.buffer.toString('utf8'));

        for (const value of fileContent)
            await Product.updateOne({ code: value.code }, value)

        response({ res, msg: "Updated Data", status: 200 })
    } catch (error) {
        console.log(error)
        response({ res, msg: error.message, status: 400, error: true })
    }
}

export const getListWithCategory = async (req, res) => {
    try {
        const all = await Product.find()
        const result = {}
        for (const data of all) {
            const value = { ...data._doc }
            if (value.residual < 3) value.status = false
            else value.status = true

            if (result[value.category_rout]) result[value.category_rout].push(value)
            else result[value.category_rout] = [value]
        }

        response({ res, status: 200, data: result })
    } catch (error) {
        console.log(error)
        response({ res, msg: error.message, status: 400, error: true })
    }
}
