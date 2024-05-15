import mongoose from "mongoose";

export async function connect() {
try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on('connection',()=>{
        console.log("mongoDb connected")
    });
    connection.on("error",(err)=>{
        console.log("mongoDb connection Error",err)
        process.exit();
    })

} catch (error) {
    console.log("somthing went wrong in connection of db");
    console.log(error)
}
}