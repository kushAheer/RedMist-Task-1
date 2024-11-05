import mongoose from "mongoose";

const mediaInfoSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
    },
    frontImage : {
        type : String,
        required : true
    },
    productGallary : [{
        type : String,
        
    }],


} , {timestamps : true});


const MediaInfo = mongoose.model('MediaInfo' , mediaInfoSchema);

export default MediaInfo;