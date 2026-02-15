import express from 'express'
import { connect } from './utils/connect.js'
import cors from 'cors'
import { route } from './routes/router.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

app.use(cors({
    origin: ['http://localhost:5173','https://portfolio-silk-seven-78.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use(route)
const start = async()=>{
    try {
        await connect();
        app.listen(process.env.PORT,()=>console.log(`server connected to port ${process.env.PORT}`))
    } catch (error) {
        console.error(error)
    }
}

start()


