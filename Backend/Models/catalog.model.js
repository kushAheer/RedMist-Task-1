import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
    } , 
    stockQuantity : {
        type : Number,
        required : true
    },
    
    discount : {
        type : Number,
        required : false
    },
    discountStartDate : {
        type : Date,
        required : false
    },
    discountEndDate : {
        type : Date,
        required : false
    }
} , {timestamps : true});

const Catalog = mongoose.model('Catalog' , catalogSchema);

export default Catalog;

