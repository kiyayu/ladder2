import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import { env } from './config/env'

const app = express()

app.use(cors({origin:env.clientUrl}))

app.use(express.json())
 

app.get('/health', (req, res) => {
res.json({uptime:process.uptime(), status:'Ok'})
})
app.get('/ok', (req:Request, res:Response) => {
    res.send('Ok')
}
)

export default app