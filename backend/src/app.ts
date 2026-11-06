const pkg = require('../package.json')
import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import { env } from './config/env'

const app = express()

app.use(cors({origin:env.clientUrl}))

app.use(express.json())
 

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), version: pkg.version })
})
app.get('/ok', (req:Request, res:Response) => {
    res.send('Ok')
}
)

export default app