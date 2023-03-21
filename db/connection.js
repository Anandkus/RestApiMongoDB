const mongoose =require('mongoose')

MONGODB_URL =process.env.database;

const connectDb =()=>{
    // console.log("database  connect call funtion check ")
    return mongoose.connect(MONGODB_URL,{
        useNewUrlParser:true,
         useUnifiedTopology:true,
    })
}

module.exports = connectDb;