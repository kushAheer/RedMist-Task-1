import mongoose from "mongoose";


const generalInfoSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
    },
    category : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    model : {
        type : String,
        required : true
    },
    color : {
        type : String,
        required : true
    },
    warranty : {
        type : String,
        required : true
    },
} , {timestamps : true});

const GeneralInfo = mongoose.model('GeneralInfo' , generalInfoSchema);

export default GeneralInfo;