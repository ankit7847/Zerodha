<<<<<<< HEAD
const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode:String,
});

module.exports = {OrdersSchema};
=======
const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = OrdersSchema;
>>>>>>> 23fa13c (fixing sell)
