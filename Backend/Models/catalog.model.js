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
        required : true
    },
    discountStartDate : {
        type : Date,
        required : true
    },
    discountEndDate : {
        type : Date,
        required : true
    }
} , {timestamps : true});

const Catalog = mongoose.model('Catalog' , catalogSchema);

export default Catalog;

