import express from "express";

const app = express();

const WALLET = "GAHGNVFOS4LV7ZQS27JHP2D57TUOZ6OBCL5WUL6VXESOMXGLERSWSWBG";

app.get("/", (req,res)=>{
 res.send("XLM Signal API running");
});

app.get("/api/xlm-signal", async (req,res)=>{

 const data = await fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=stellar&vs_currencies=usd"
 );

 const json = await data.json();

 const price = json.stellar.usd;

 let signal = "HOLD";

 if(price < 0.09){
  signal = "BUY";
 }

 if(price > 0.20){
  signal = "SELL";
 }

 res.json({
  coin:"XLM",
  price,
  signal
 });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
 console.log("Server running");
});
