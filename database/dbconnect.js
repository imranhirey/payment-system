const mongoose= require('mongoose')
let url =
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
  console.log(er)
})



module.exports= mongoose
