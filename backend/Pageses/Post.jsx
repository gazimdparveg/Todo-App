const mongoose = require('mongoose')
const {Schema}= mongoose;

 
   
  const postschma = new Schema({
    name:{
        type    : String,
        require : true
    },
    email:{
        type   : String,
        require: true
    },
    number:{
        type   : String,
        require: true
    }
  })  

 

const post =  mongoose.model('post', postschma);
module.exports = post;
