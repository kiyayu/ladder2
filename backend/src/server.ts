import app from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/db";

connectDB()

app.listen(env.port, () => {
    console.log(`server is runing on port ${env.port}`)
})