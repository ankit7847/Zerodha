<<<<<<< HEAD
const {model} = require("mongoose");


const OrdersSchema = require("../schemas/OrdersSchema");

const  OrdersModel = new model("order",OrdersSchema);

module.exports = {OrdersModel};
=======
const { model } = require("mongoose");
const OrdersSchema = require("../schemas/OrdersSchema");

const OrdersModel = model("Order", OrdersSchema);
module.exports = { OrdersModel };
>>>>>>> 23fa13c (fixing sell)
