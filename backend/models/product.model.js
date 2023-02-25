const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = new schema({
    name:{
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;