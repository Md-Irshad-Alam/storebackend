const { default: mongoose } = require("mongoose");

const HeelCategorySchema = new mongoose.Schema({
    HeelCategory: {
        type: String,
        max: 100
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

module.exports = mongoose.model('HeelCategorys', HeelCategorySchema)