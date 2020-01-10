const mongoose = require('mongoose');
const collectionSchema = mongoose.Schema({
    pid: Number,
    c_title: String,
    c_intro: String
});

// module.exports = mongoose.model('Simant_Product', productSchema);
module.exports = mongoose.model('Daraz_Collection', collectionSchema);