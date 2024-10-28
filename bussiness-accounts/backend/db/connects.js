const mongoose= require('mongoose')
mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(()=>{
    console.log('connnected')
})
.catch(er=>{
  console.log(er.message)
})



module.exports= mongoose
