require("dotenv").config();
const connectDb= require("./db/connection");
const product = require("./models/product");
const Product = require('./models/product')
const ProductJson=require('./product.json')
const start = async()=>{
try{
await connectDb(process.env.database);
// await Product.deleteMany();
await Product.create(ProductJson);
console.log("successfully insert !")
}
catch(err){
    console.log("not insert data ",err)
}
}
start()