import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/crud_db`)
        console.log("MongoDBに接続しました")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB
