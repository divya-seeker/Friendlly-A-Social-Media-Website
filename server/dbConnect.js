const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

module.exports=async()=>{
    const mongoUrl="mongodb://127.0.0.1:27017/myDatabase";
    try{
        const connect=await mongoose.connect(mongoUrl,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`MongoDb Connected:${connect.connection.host}`);
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}