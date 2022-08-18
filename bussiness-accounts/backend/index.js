let express = require('express');
let app=express();
app.use(express.json());
let connectdb = require('./db/connects')
connectdb
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
app.use(express.static(__dirname+'/public'));
let cors = require('cors');
app.use(cors({
    origin: '*',
    
    
}));
let auth = require('./middlewares/auth');
app.use(auth);

app.use('/register',require('./routes/auth/register'));
app.use('/login',require('./routes/auth/login'));

app.use('/vercode',require('./routes/auth/vercode'));
app.use('/intents',require('./routes/payments/intents'));
app.use('/updaterefrence',require('./routes/auth/updaterefrence'));
app.use('/getacount',require('./routes/profiders/accountinfoprofider'));




app.listen(5500,()=>{
    console.log('server started at port 5500');
})
