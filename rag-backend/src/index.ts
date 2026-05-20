import express, {Request, Response} from 'express'
import cors from 'cors'
import {createTable} from './database/SQL.ts'



const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT
app.get('/', (req: Request, res: Response) => res.send('ok'))
createTable



app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))