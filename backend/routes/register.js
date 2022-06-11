const express = require("express");
const { isDate } = require("moment");
const router = express.Router();
let connectdatabase = require("../database/dbconnect");
let User = require("../database/schemas/regstrationSchema");
connectdatabase;

router.post("/", async (req, res) => {
  console.log(req.body.user);
  let { fullname, email, phonenumber, password1, birthdate } = req.body.user;
  let checkemail= await User.findOne({email:email})
  let checknumber= await User.findOne({phone_number:phonenumber})

  if (checkemail || checknumber){
    res.json({
     msg: checkemail?'sorry user with this email already exist':'sorry user with this number already exist'
    }).status(401)

  }
  else{

    let user = new User({
      name: fullname,
      email: email,
      phone_number: phonenumber,
      password: password1,
      birthdate: birthdate,
      refrences: {
        emailverified: false,
        numberverified: false,
        identityverified: false,
        otp: null,
        two_step_verification:false,
        logged:false,
        
      },
    });

    try {
   
      user.save();
      res.json({
        user:{
          name:user.name,
          number:user.phone_number,
          refrences:user.refrences,
          email
  
        },
        msg:'ok'
  
      })
    } catch (error) {
      res.status(500)
    }
  }


  
 
 
});

module.exports = router;
