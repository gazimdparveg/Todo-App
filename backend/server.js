const express = require('express') 
const app = express()
app.use(express.json());
var cors = require('cors');
app.use(cors())


const post = require('./Pageses/Post.jsx');
const port = process.env.port || 8000

app.post('/post', function(req,res){
    const postinfo = {
        name:req.body.names,
        email:req.body.email,
        number:req.body.number
         
    }
    const productName = new post(postinfo);
    productName.save();
    res.send('Post is successfully add');
    
    
})
app.get('/post', async(req,res)=>{
  let date = await post.find({});
  res.send(date)
   
})  

app.delete('/delete/:id', async(req,res)=>{
   const {id} = req.params;
   post.findByIdAndDelete({_id:id})
   .then(date => {
    res.json(date) 
    
  
  })
   
})

app.put('/update/:id', async (req,res)=>{
  const {id} =  await req.params;
  post.findByIdAndUpdate({_id:id}) 
  .then(date => {
    res.json(date) 
   })
     
})
  

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mytodo')
  .then(() => console.log('Connected!'));



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port)