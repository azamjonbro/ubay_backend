import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import router from './router/router.js'
import error_handle from './middleware/error_handle.js'
import mongoose from './utils/mongoose.js'
import response from './utils/response.js'
dotenv.config()

const app = express()
const PORT = 1000
const DB = "mongodb+srv://azamjonbro:2E0iZp0AbUsCGjQR@backend.azlkhfh.mongodb.net/?retryWrites=true&w=majority&appName=backend"
export const ADMIN = 12345678
mongoose(DB)

const uploadsPath = path.join(process.cwd(), 'src', 'uploads');
app.use(express.static(uploadsPath));
app.use(cors())
app.use(express.json())
app.use(router)
app.use(error_handle)
app.use('/*', (req, res) => response({res, msg: "Page Not Found", status: 404}))

app.listen(PORT, () => console.log(PORT +' Run Server'))