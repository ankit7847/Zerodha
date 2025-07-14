<<<<<<< HEAD
const {model} = require("mongoose");


const PositionsSchema = require("../schemas/PositionsSchema");

const  PositionsOrder =  model("Position",PositionsSchema);

module.exports = PositionsOrder;
=======
const { model } = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema");

const PositionsOrder = model("Position", PositionsSchema);
module.exports = { PositionsOrder };
>>>>>>> 23fa13c (fixing sell)
