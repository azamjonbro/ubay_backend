import multer from "multer"
import path from 'path'
import fs from 'fs'

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(process.cwd(), 'src', 'uploads'))
    },
    filename(req, file, cb) {
        const extractDir = path.join(process.cwd(), 'src', 'uploads')
        if (!fs.existsSync(extractDir)) fs.mkdirSync(extractDir)
        cb(null, req.body.code + path.extname(file.originalname))
    },
})

export const upload = multer({ storage })