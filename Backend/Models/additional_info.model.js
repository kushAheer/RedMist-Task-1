import mongoose from 'mongoose';

const additionalInfoSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
    },
    weight : {
        type : String,
        required : true
    },
    dimensions : {
        type : String,
        required : true
    },
    material : {
        type : String,
        required : true
    },
    otherInfo : {
        type : String,
        required : true
    }
} , {timestamps : true});


const AdditionalInfo = mongoose.model('AdditionalInfo' , additionalInfoSchema);

export default AdditionalInfo;