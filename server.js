import express from "express";

const app = express();

app.get("/", (req,res)=>{
 res.send("XLM x402 API running");
});

app.get("/api/xlm-price",(req,res)=>{

 const paid = req.headers["x402-payment"];

 if(!paid){
  res.status(402).json({
   message:"Payment required",
   price:"0.01 XLM"
  });
  return;
 }

 res.json({
  coin:"XLM",
  price:"0.12"
 });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
 console.log("Server running");
});
