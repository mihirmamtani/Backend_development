import dotenv from 'dotenv';
import connect from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path:"../env"
})

connect()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is Listen on port : ${process.env.PORT}`);
    })
})
.catch((err)=>{console.log('MONGO db ERROR',err);})