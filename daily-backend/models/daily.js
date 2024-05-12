const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const dailySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});


const Daily = mongoose.model('daily', dailySchema);

module.exports = Daily;
