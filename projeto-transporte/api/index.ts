import express from 'express'
import {router} from './routes/router'
import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/transporte').then(()=>{
    console.log('conectado ao banco com sucesso')
})

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000)