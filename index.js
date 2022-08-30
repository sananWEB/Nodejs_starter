const express=require("express")
const app=express();
const cors=require("cors")
const bodyParser=require("body-parser");
require("dotenv").config();


//middileware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });


  
 app.get("/",(req,res)=>{
    res.send("hello world")
  })
  
			


  

app.listen(process.env.PORT ||5000,()=>{console.log("server is on!!!!")})
