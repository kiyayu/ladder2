import mongoose from "mongoose";
import { env } from "./env";


export const connectDB = async () => {
    try{
        await mongoose.connect(env.mongoUrl)
        console.log('Database connected successfully!')

    } catch (error){
        console.log('database connection faild')
        console.error("error", error)
        process.exit(1)
    }
}