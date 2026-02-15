import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGOURI

export const connect = async()=>{
    try {
        await mongoose.connect(uri)
        console.log('Database connected!')
    } catch (error) {
        console.log('error connection database',error)
    }
}