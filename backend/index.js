
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const PositionsOrder =require('./models/PositionsOrder');
const { HoldingsModel } = require('./models/HoldingsModel');


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;  



const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get('/addpositions',async(req,res)=>{
//     let temppostions=[
//        {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//     ];
//     temppostions.forEach((item)=>{
//         let newPosition = new PositionsOrder({
//     product:item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//         });
//         newPosition.save();

//     });

//     res.send("Done!");

// });

app.get('/allholdings',async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allpositions',async(req,res)=>{
  let allPositions = await PositionsOrder.find({});
  res.json(allPositions);
});

app.listen(PORT,()=>{
    console.log("App started");
    mongoose.connect(url);
    console.log("DB is connected");
});