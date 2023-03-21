const exp =require('express');
 //for hide data
 require('dotenv').config();
//database require
 const connectDb = require('./db/connection');

const app =exp()
const PORT = process.env.PORT || 1105;
const product_route=require('./routes/routess');


app.get("/",(req,res)=>{
    res.send(" hey i am home page !")
})

//middleware  for router
app.use("/api/product",product_route);



const start =async()=>{
try{
    await connectDb()
app.listen(PORT,()=>{
    console.log(`server is start http://localhost:${PORT}`)
})
}
catch(err){
    console.log('errr is ',err);
}
}
start()
