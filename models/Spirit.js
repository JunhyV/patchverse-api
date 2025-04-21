const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpiritSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    class: {
        type: String,
        trim: true,
    },
    shaman: {
        type: String,
        trim: true,
    },
    reiryoku: {
        type: String,
        trim: true,
    },
    story: {
        type: String,
        trim: true,
    },
    img: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Spirits', SpiritSchema);