<<<<<<< HEAD
const {model} = require("mongoose");


const HoldingsSchema = require("../schemas/HoldingsSchema");

const  HoldingsModel =  model("holding",HoldingsSchema);

module.exports = {HoldingsModel};
=======
const { model } = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema");

const HoldingsModel = model("Holding", HoldingsSchema);
module.exports = { HoldingsModel };
>>>>>>> 23fa13c (fixing sell)
