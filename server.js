import express from 'express';
import notFoundMiddleware from './middleware/not-found';
import dotenv from 'dotenv';
import connectDB from './db/connect.js'
dotenv.config()

const app=express()

app.get('/',(req,res)=>{
    res.send('welcome')
})
app.use(notFoundMiddleware)
const port=process.env.port || 500
app.listen(port,()=>console.log(`Server is runnning on port ${port}`))

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        
    }
}

start()
