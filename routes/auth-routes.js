const router = require('express').Router();
const passport = require('passport');
const express=require('express');
const jwt=require("jsonwebtoken");
const Userm=require('../models/user-main');
const Admin=require('../models/admin-main');
const User=require('../models/user-model');

const conn=require('../models/user-direct');
const pm=require('../config/passport-setup')(passport);
const functions=require('../config/function');
const request=require('request');

//const config=require('../config/keys');
//var passportLinkedIn = require('../auth/linkedin');

//individual
router.post('/register',(req,res,next)=>{
  let newUser=new Userm({
name:req.body.name,
email:req.body.email,
username:req.body.username,
password:req.body.password

 
 });
 Userm.addUser(newUser,(err,userm)=>{
     if(err){
         res.json({
             success:false,msg:"failed"
         });
     }
     else{
         res.json({success:true,msg:"done"});
     }

 });
});
router.post('/aregister',(req,res,next)=>{
  let  newAdmin=new Admin({
name:req.body.name,
email:req.body.email,
username:req.body.username,
password:req.body.password

 
 });
 Admin.addUser(newAdmin,(err,admin)=>{
     if(err){
         res.json({
             success:false,msg:"failed"
         });
     }
     else{
         res.json({success:true,msg:"done"});
     }

 });
});

/*router.post('/authorize', (req, res, next) => {//acccessing from client side for definite span thru token
  const username = req.body.username;
  const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
    if(err) {
      console.log("error");
    }
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data: user}, conn.secret, {
          expiresIn: 15// 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
           // email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});
*/



router.post('/authenticate', (req, res, next) => {//acccessing from client side for definite span thru token
  const username = req.body.username;
  const password = req.body.password;

    Userm.getUserByUsername(username, (err, userm) => {
    if(err) {
      console.log("error");
    }
    if(!userm){
      return res.json({success: false, msg: 'User not found'});
    }

    Userm.comparePassword(password, userm.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({emailAddress:userm.email}, conn.secret, {
          expiresIn: 86400// 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          userm: {
            id: userm._id,
            name: userm.name,
            username: userm.username,
            email: userm.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

router.post('/aauthenticate', (req, res, next) => {//acccessing from client side for definite span thru token
  const username = req.body.username;
  const password = req.body.password;

    Admin.getUserByUsername(username, (err, admin) => {
    if(err) {
      console.log("error");
    }
    if(!admin){
      return res.json({success: false, msg: 'Admin not found'});
    }

    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data: admin}, conn.secret, {
          expiresIn: 86400// 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          admin: {
            id: admin._id,
            name: admin.name,
            username: admin.username,
            email: admin.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});
router.get('/profilem',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
  
res.json({userm:req.user});
});
router.get('/questions',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
  
res.json({admin:req.user});
});
//google+twitter+linkedin
// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.username});
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logout();
    res.clearCookie("keys");
  //  request.session.destroy()
    res.redirect('/');
});
//only google
// auth with google+
router.get('/google', passport.authenticate('google', {
    // handle with passport
    scope:['profile']
}));

router.get('/google/redirect', passport.authenticate('google'),(req,res)=>{
     //res.send('logged in');
  // res.send(req.user);
   res.json(req.user);
});
//only twitter
// auth login

// auth logout


/*router.post('/authorize',function(req,res){
        var header=config.clientId+':'+config.clientSecret;
        var encheader=new Buffer(header).toString('base64');
        var finalheader='Basic'+encheader;
        request.post('https://api.twitter.com/oauth2/token',{form:{'grant_type':'client_credentials'},
        headers:{Authorization:finalheader}},function(error,response,body){
            if(error)
            console.log(error);
            else{
                config.bearertoken=JSON.parse(body).access_token;
                res.json({success:true,data:config.bearertoken});

                }
        })
        });*/
// auth with twitter
router.get('/twitter', passport.authenticate('twitter', {
    // handle with passport
    scope:['profile']
}));

router.get('/twitter/redirect', passport.authenticate('twitter'),
       function(req, res) {
    
    res.json(req.user);
  });


/*router.get('/auth/linkedin', passportLinkedIn.authenticate('linkedin'));

router.get('/auth/linkedin/callback',
  passportLinkedIn.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication
    res.json(req.user);
  });
//only linkedin*/
router.get('/linkedin/oauth/v2/authorization', passport.authenticate('linkedin', {
    // handle with passport
    scope:['r_emailaddress', 'r_basicprofile']
}));

router.get('/linkedin/redirect', passport.authenticate('linkedin',{  state: 'linkedinauth'   }),(req,res)=>{
    res.json(req.user);
});
/*router.get('/facebook/redirect', passport.authenticate('facebook',{failureRedirect:'/login'}),(req,res)=>{
     //res.send('logged in');
  // res.send(req.user);
    res.redirect('/profile/');
});
*/
router.post('/callback', (req, res) => {
        console.log('Params: ' + JSON.stringify(req.body))
        var options = {
            url: 'https://www.linkedin.com/oauth/v2/accessToken?format=json',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
            },
            form: {
                'grant_type': 'authorization_code',
                'code': req.body.code,
                'redirect_uri': 'http://localhost:4200/demo',
                'client_id': '81tebblzhe3mqx',
                'client_secret': 'PJ6KsL7fzamqUo1S'
            },
            json: true
        }
        request(options, (err, response, body) => {
            console.log("Token Body: " + JSON.stringify(body));
            console.log();
            console.log("Token Response: " + JSON.stringify(response));
            console.log();


            if (body.error) {
                res.json({
                    success: false,
                    error: body.error,
                    error_description: response.body.access_token
                });
            } else {
                token = body.access_token;
                console.log("Access Token: " + token);
                console.log();
                //res.json({success:true,access_token:body.access_token});
                console.log('Getting user info...');
                console.log();

                var userOptions = {
                    url: 'https://api.linkedin.com/v1/people/~:(firstName,lastName,email-address)?format=json',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json',
                        'Accept-Charset': 'utf-8',
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                }
                console.log(userOptions.headers);
                request(userOptions, (err, response, body) => {
                    console.log("User RESPONSE: " + JSON.stringify(response));
                    console.log();
                    console.log("User BODY: " + JSON.stringify(body));
                    console.log();
                    console.log(body);
                    const token = jwt.sign({
                        emailAddress: body.emailAddress
                    }, conn.secret, {
                        expiresIn: '24h'
                    });

                    let user= new User({
                    //    id:user._id,
                         name: body.firstname,
                        email: body.emailAddress,
                        username: body.firstName + " " + body.lastName
                    });

                    user.save((err) => {
                        if (err) {
                            if (err.code === 11000) {
                                res.json({
                                    success: true,
                                    token: 'JWT '+token,
                                    message: 'Username or e-mail already exists',
                                    user: {
                                             //id: user._id,
                                        name: body.firstname,
                                        email: body.emailAddress,
                                        username: body.firstName + " " + body.lastName
                                    }
                                });
                            }
                        } else {
                            res.json({
                                        success: true,
                                    token: 'JWT '+token,
                                message: 'User Registered',
                                user: {
                                        //id: user._id,
                                        name: body.firstname,
                                    email: body.emailAddress,
                                    username: body.firstName + " " + body.lastName
                                }
                            });
                        }
                    });

                });
            }
        });

    });
module.exports = router;
