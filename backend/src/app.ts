import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import { env } from './config/env'

const app = express()

app.use(cors({origin:env.clientUrl}))

app.use(express.json())
app.use((req,res,next) =>{
    console.log('headers',{
        method: req.method,
        url: req.url,
        
    })
    next()
})

app.get('/helath', (req, res) => {
res.json({uptime:process.uptime(), status:'Ok'})
})
app.get('/ok', (req:Request, res:Response) => {
    res.send('Ok')
}
)

export default app