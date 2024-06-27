import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI ?? "")
.then(()=>{
    console.log("connected to the database")
})
.catch(()=>{
    process.exit(0)
})

export default mongoose;