const ProgressSchema = new Schema({
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