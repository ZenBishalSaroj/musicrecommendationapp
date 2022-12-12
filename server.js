import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import dotenv from 'dotenv';
import errorHandlerMiddleware from './middleware/error-handler.js';
//import connectDB from './db/connect.js'
import authRouter from './routes/authRoutes.js';
import songsRouter from './routes/songsRoutes.js';
import connectDB from './db/connect.js';
import 'express-async-errors';
import morgan from 'morgan';
dotenv.config()

const app=express()

app.get('/',(req,res)=>{
    res.send('welcome')
})


const port=process.env.port || 5000

app.use(express.json())

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/songs',songsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

if (process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()



//heroku deploy

const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});