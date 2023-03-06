import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.routers.js';
import propertyRouter from './routes/property.routers.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/', (req,res) => {
    res.send({
        message: 'Hello World!' 
    });
})
app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);
// menit ke 2:14:18 / 4:41:21
const startServer = async () => {
    try {
       connectDB(process.env.MONGODB_URL);

       app.listen(8080, ()=> console.log('Server Startte on Port http://localhost:8080'));
    }catch (error){
        console.log(error);
    }
}

startServer();