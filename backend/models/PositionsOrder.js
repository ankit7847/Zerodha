
const {model} = require("mongoose");


const PositionsSchema = require("../schemas/PositionsSchema");

const  PositionsOrder =  model("Position",PositionsSchema);

module.exports = PositionsOrder;


