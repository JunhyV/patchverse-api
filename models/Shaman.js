const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShamanSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        lastname: {
            type: String,
            trim: true,
        },
        age: {
            type: String,
            trim: true,
        },
        birthday: {
            type: String,
            trim: true,
        },
        spirits: {
            type: String,
            trim: true,
        },
        group: {
            type: String,
            trim: true,
        },
        furyoku: {
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
    }
);

module.exports = mongoose.model('Shamans', ShamanSchema)