import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connect = async ()=>{
    try{
        const connectionResponse =await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log('sucesfully connected ');
    }
    catch(error){
        console.log("MONGODB CONNECTION ERROR !!!! ", error);
        process.exit(1);
    }
}
export default connect;