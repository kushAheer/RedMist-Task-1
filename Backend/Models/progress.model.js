import mongoose from 'mongoose';
const ProgressSchema = new  mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    progressStatus: {
        type: Number,
        required: true
    }
}, { timestamps: true });


const Progress = mongoose.model('Progress', ProgressSchema);

export default Progress;