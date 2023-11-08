const { default: mongoose } = require("mongoose");

const forePartCategorySchema = new mongoose.Schema({
    forepart_category: {
        type: String,
        max: 100
    }
})

module.exports = mongoose.model('forepartcategory', forePartCategorySchema)