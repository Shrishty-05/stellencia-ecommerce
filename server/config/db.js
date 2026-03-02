import mongoose from "mongoose"; // object data modelling lib -> 
// helps define schemas, validate data interact with mongodb
 
const connectDB = async () => {
    // return a promise [async] 
    // why async ? -> connecting to mongoDB takes time [asynchronous]
    try {
        // connects app to db and 
        // process... -> mongodb connection string in .env file
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected successfully !");
    }
    catch(error){
        console.log(`Error : ${error.message}`);
        
        // stop node server -> can't continue without DB-
        process.exit(1);
    }
}

export default connectDB;