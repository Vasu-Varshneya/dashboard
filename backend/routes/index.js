var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var bcrypt= require('bcryptjs')
var usermodel = require('../models/usermodel.js');
const datamodel = require('../models/datamodel.js');
const secret = "secret"
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/signup', async (req, res) => {
  console.log("called")
  let { name,  email, password } = req.body;
  let emaildup = await usermodel.findOne({ email: email })
  if (emaildup) {
    return res.json({ message: 'Email already exists' })
  }
  else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;
        let user = await usermodel.create({
          Name: name,
          email: email,
          password: hash,
        })
        return res.json({ success: true, message: "User created successfully", userId: user._id,name:name })
      });
    });
  }
})
router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  let user = await usermodel.findOne({ email: email });
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        var token = jwt.sign({ email: user.email, userId: user.userId }, secret);
        return res.json({ success: true, message: "Login successfully", userId: user._id, token: token})
      }
      else {
        return res.json({ success: false, message: 'Invalid  password' })
      }
    })
  }
  else {
    return res.json({ success: false, message: 'User not found' })
  }
})


module.exports = router;

