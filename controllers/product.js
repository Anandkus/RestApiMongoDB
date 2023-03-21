
const Product =require("../models/product")

const GetAllProduct=async(req,res)=>{
    // all data find with searching 
    //const mydata =await Product.find(req.query)
//one data find colomn name
//const mydata = await Product.find({ name: "watch"})

const {company ,name,feature,sort,select}=req.query;
const queryObject={};
if(company){
    queryObject.company=company;
}
if(name){
    queryObject.name={$regex:name ,$options:'i'};
}
if(feature){
    queryObject.feature=feature;
}
let apitData=Product.find(queryObject)
if(sort){
    let sortFix=sort.split(',').join(" ")
apitData=apitData.sort(sortFix)
}
if(select){
    //only two
    // let selectFix=select.replace(","," ")
    let selectFix=select.split(',').join(" ")
    apitData=apitData.select(selectFix)
    }
    
//pagination to get data like page=2
let page= Number(req.query.page) || 1;
let limit= Number(req.query.limit) || 3;
let skip =(page-1)*limit;
apitData=apitData.skip(skip).limit(limit);



//console.log(queryObject)

const mydata =await apitData;
res.status(200).json({mydata,length:mydata.length})
// res.status(200).json({msg:"i am getAllProduct"})

}

const TextingProduct =async(req,res)=>{
    //req query work to search path?name=watch
const mydata =await Product.find(req.query).select('name');
//console.log(req.query)
res.status(200).json({mydata,length:mydata.length})
 
}


module.exports= {GetAllProduct,TextingProduct};