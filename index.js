import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
import questionRoutes from './routes/question.js'
import answerRoutes from './routes/answer.js'

const app=express();
dotenv.config()
app.use(express.json({limit:"30 mb",extended:true}));
app.use(express.urlencoded({limit:"30 mb",extended:true}));
app.use(cors());

app.get('/',(req,res)=>{res.send("working fine")});

app.use('/user',userRoutes);
app.use('/Question',questionRoutes);
app.use('/answer',answerRoutes);

const PORT=process.env.PORT || 5001;
const MONGO_URI=process.env.MONGO_URL
mongoose.connect(MONGO_URI,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>app.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`)
}))
.catch((err)=>{console.log(err.message)})
