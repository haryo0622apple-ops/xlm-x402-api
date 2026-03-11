import express from "express";

const app = express();

app.get("/", (req,res)=>{
 res.send("XLM API running");
});

app.get("/api/xlm-price",(req,res)=>{
 res.json({
  coin:"XLM",
  price:"test"
 });
});

app.listen(process.env.PORT || 3000);
