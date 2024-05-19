const mongoose = require('mongoose');
const unischema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      rank: {
        type: Number,
        type: String,
        required: true,
      },
      logo_src: {
        type: String,
        required: true,
      },
      region: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      }, date: {
        type: Date,
        default: Date.now,
      }
    });
     const data = mongoose.model("data", unischema)
     module.exports= data;
