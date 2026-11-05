
import { z } from 'zod'
import dotenv from 'dotenv'
dotenv.config()
  type EnvTypes = {
    port:number;
    mongoUrl:string;
    nodeEnv:string
    clientUrl:string
}

const envSchema = z.object({
    PORT:z.coerce.number(),
    MONGO_URL:z.string(),
    NODE_ENV:z.string(),
    CLIENT_URL:z.string()
})

const parsed = envSchema.safeParse(process.env)
if(!parsed.success){
    console.log('missing enviroment varibles')
    parsed.error.issues.forEach((er) => {
        console.error(`${er.path.join()}: ${er.message}`)
    })
    process.exit(1)
}

export const env:EnvTypes = {
  port:Number(parsed.data?.PORT),
  mongoUrl:parsed.data?.MONGO_URL,
  nodeEnv:parsed.data?.NODE_ENV,
  clientUrl:parsed.data.CLIENT_URL
}