// const express=require("express");
// const app=express()
// const dotenv=require("dotenv");
// dotenv.config()
// const mongoose=require("mongoose");
// const mongoUrl=process.env.mongoUrl;
// const PORT=process.env.PORT;
// const cors=require("cors")
// console.log(PORT)
// console.log(mongoUrl)
// app.use(express.json()); // This middleware handles JSON requests
// app.use(express.urlencoded({ extended: true }));
// app.use(cors())
// app.use(express.static('public'));  
// app.get('/', function (req, res) {  
//    res.sendFile( __dirname + "/" + "index.html" );  
// })  
// async function connectDB(){
//     try{
//         await mongoose.connect(mongoUrl)
//         console.log("Connected to DB")
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// connectDB();
// const inquirySchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     subject:String,
//     ProjectDetails:String
// })
// const model=mongoose.model("Portfolio",inquirySchema)
// const createModel=async (name,email,subject,ProjectDetails)=>{ //adds user's contact me to db
//     const userEntered={
//         name:name,
//         email:email,
//         subject:subject,
//         ProjectDetails:ProjectDetails
//     }
//     try {
//         const enterDetails=await model.insertMany(userEntered);
//         console.log(`Success ${enterDetails.id}`)
//     } catch (error) {
//         console.log("Error")
//     }
    
// }
// app.post("/contactMe",(req,res)=>{
//     console.log(req.body)
//     let response={
//         name:req.body.name,
//         email:req.body.email,
//         subject:req.body.text,
//         ProjectDetails:req.body.longText
//     }
//     try {
//         createModel(response.name,response.email,response.subject,response.ProjectDetails)
//         console.log("Success")
//         res.json(response)
//     } catch (error) {
//         console.log("Error")
//     }
// })
// app.listen(PORT,()=>{
//     console.log("Connected to port...")
// })

console.log("Only static files for github pages")