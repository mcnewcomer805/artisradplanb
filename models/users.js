const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
     userName:{
         type: String,
         required: true
     },
     password: {
         type: String,
         required: true 
     },
     Post:[
    {     postName:{
             type: String,
             required: true
         },
         postRating: {type: Array,
                      required: false  },
        postDescription:{
            type: String,
            required: true
        },
       
        link: {
            type: String,
            required: true
        },
        comments: [{
            type: String,
            required: false
        }]
    }]
    
})

const user = mongoose.model("user", userSchema);

module.exports = user;
