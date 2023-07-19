const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    
    customername : {
        type : String,
        required : true
    },
    productname : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    delivertime : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})

const Item = mongoose.model("Item",itemSchema);

module.exports = Item;