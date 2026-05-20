import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT




app.listen(`The server is living on ${PORT}`)