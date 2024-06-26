import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app =express();

app.use(cors({
    origin:process.env.ORIGIN_PORT,
    credentials: true
}))
app.use(express.json({limit:'20KB'}));
app.use(express.urlencoded({extended: true, limit:'16KB'}));
app.use(express.static("public"))

export {app};