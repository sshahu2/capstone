const express=require('express');
const authRoutes=require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup=require('./config/passport-setup');
var async = require('async');
//const passportSetup1=require('./config/passport-setup1');
var request = require('request');
var moment = require('moment');
const cookieSession=require('cookie-session');
var logger = require('morgan');
var jwt = require('jwt-simple');
var moment = require('moment');
const passport=require('passport');
const bodyParser=require('body-parser');
const path=require('path');//it is in-built
const cors=require('cors');
const port=3000;
const conn=require('./models/user-direct');
const app= express();
const session=require('express-session');
app.use(cors());//to access from any domain...
app.use(bodyParser.json());//uses middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'angular-src')));
//const functions=require('./config/function');

const keys=require('./config/keys');
const mongoose = require('mongoose');
mongoose.connect(conn.database);
mongoose.Promise = global.Promise;
mongoose.connection.on("connected",()=>
{
  console.log('c'+conn.database);

});
mongoose.connection.on("error",(err)=>
{
  console.log('e'+err);

});

app.use(passport.initialize());
app.use(passport.session());
app.set('view engine','ejs');
app.use(cookieSession({
    maxAge: 10 * 1000,
    keys:[keys.session.cookieKey],
     proxy: true
}));
app.use(passport.initialize());
app.use(passport.session());
// initialize passport
/*app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));*/
// initialize passport

app.use("/auth",authRoutes);//actually accessing auth-routes.js file in folder routes thru authroutes defined above line 2
app.use('/profile', profileRoutes);//actually accessing profile-routes.js file in folder routes thru authroutes defined above line 3
//app.post('/authorize',functions.authorize);
app.get('/',(req,res)=>{
    res.render('home',{ user: req.user });
});//used for rendering home.ejs when app first starts at port

app.listen(port,()=>{
    console.log("done")
});