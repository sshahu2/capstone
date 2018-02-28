const router = require('express').Router();
const passport = require('passport');
const express=require('express');
const jwt=require("jsonwebtoken");
const Userm=require('../models/user-main');
//const Admin=require('../models/admin-main');
var qs = require('querystring');
var mongoose = require('mongoose');
var async = require('async');
var logger = require('morgan');
var jwts = require('jwt-simple');
var moment = require('moment');

//const User=require('../models/user-model');

const conn=require('../models/user-direct');
const pm=require('../config/passport-setup')(passport);
const functions=require('../config/function');
const request=require('request');
var config = require('./auth-config');
/*var userSchema = new mongoose.Schema({
  email: { type: String, lowercase: true },
  password: { type: String, select: false },
  displayName: String,
  picture: String,
  provider: String,
  provider_id: String
});
function ensureAuthenticated(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[1];

  var payload = null;
  try {
    payload = jwts.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ message: err.message });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}


 |--------------------------------------------------------------------------
 | Generate JSON Web Token
 |--------------------------------------------------------------------------
 
function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwts.encode(payload, config.TOKEN_SECRET);
}

/*
 |--------------------------------------------------------------------------
 | GET /api/me
 |--------------------------------------------------------------------------
 
router.get('/api/profile', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user) {
    res.send(user);
  });
});


 |--------------------------------------------------------------------------
 | PUT /api/me
 |--------------------------------------------------------------------------
 
router.put('/api/me', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.email = req.body.email || user.email;
    user.save(function(err) {
      res.status(200).end();
    });
  });
});



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
        const token = jwt.sign({userm}, conn.secret, {
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
/*router.get('/login', (req, res) => {
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
/*router.get('/google', passport.authenticate('google', {
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
        });
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
//only linkedin
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
/*router.post('/callback', (req, res) => {
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
    router.post('/auth/google', function(req, res) {
  var accessTokenUrl = 'https://www.googleapis.com/oauth2/v4/token';
  var peopleApiUrl = 'https://www.googleapis.com/oauth2/v2/userinfo?fields=email%2Cfamily_name%2Cgender%2Cgiven_name%2Chd%2Cid%2Clink%2Clocale%2Cname%2Cpicture%2Cverified_email';
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.GOOGLE_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };
   var token_request='code='+req.body.code+
        '&client_id='+req.body.clientId+
        '&client_secret='+config.GOOGLE_SECRET+
        '&redirect_uri='+req.body.redirectUri+
        '&grant_type=authorization_code';
    var request_length = token_request.length;
  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, { body: token_request, headers: {'Content-type':'application/x-www-form-urlencoded'} }, function(err, response, token) {
    var accessToken = JSON.parse(token).access_token;
    var headers = { Authorization: 'Bearer ' + accessToken };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
      if (profile.error) {
        return res.status(500).send({message: profile.error.message});
      }

      User.findOne({ email: profile.email }, function(err, existingUser) {
          if (existingUser && existingUser.provider == "google") {
            var token = createJWT(existingUser);
            res.send({ token: token }); 
          }
          else if (existingUser && existingUser.provider != "google") {
            var user = {};
              user.provider_id = profile.id;
              user.provider = "google";
              user.email = profile.email;
              user.picture = profile.picture.replace('sz=50', 'sz=200');
              user.displayName = profile.name;
              User.findOneAndUpdate({email:existingUser.email},user, function(err) {
                var token = createJWT(existingUser);
                res.send({ token: token });
              });
          }
          else{
              var user = new User();
              user.provider_id = profile.id;
              user.provider = "google";
              user.email = profile.email;
              user.picture = profile.picture.replace('sz=50', 'sz=200');
              user.displayName = profile.name;
              user.save(function(err) {
                var token = createJWT(user);
                res.send({ token: token });
              });
          }
         // var token = req.header('Authorization').split(' ')[1];
         // var payload = jwt.decode(token, config.TOKEN_SECRET);
        });
    });
  });
});
router.post('/auth/linkedin', function(req, res) {
  var accessTokenUrl = 'https://www.linkedin.com/uas/oauth2/accessToken';
  var peopleApiUrl = 'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,email-address,picture-url)';
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.LINKEDIN_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'
  };

  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, { form: params, json: true }, function(err, response, body) {
    if (response.statusCode !== 200) {
      return res.status(response.statusCode).send({ message: body.error_description });
    }
    var params = {
      oauth2_access_token: body.access_token,
      format: 'json'
    };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: peopleApiUrl, qs: params, json: true }, function(err, response, profile) {

        // Step 3b. Create a new user account or return an existing one.
        User.findOne({ email: profile.emailAddress }, function(err, existingUser) {
        if (existingUser && existingUser.provider == "linkedin") {
            var token = createJWT(existingUser);
            res.send({ token: token }); 
          }
          else if (existingUser && existingUser.provider != "linkedin") {
            var user = {};
              user.provider_id = profile.id;
              user.provider = "linkedin";
              user.email = profile.emailAddress;
              user.picture = profile.pictureUrl;
              user.displayName = profile.firstName+' '+profile.lastName;
              User.findOneAndUpdate({email:existingUser.email},user, function(err) {
                var token = createJWT(existingUser);
                res.send({ token: token });
              });
          }
          else{
              var user = new User();
              user.provider_id = profile.id;
              user.provider = "linkedin";
              user.email = profile.emailAddress;
              user.picture = profile.pictureUrl;
              user.displayName = profile.firstName+' '+profile.lastName;
              user.save(function() {
                var token = createJWT(user);
                res.send({ token: token });
              });
        }
        });
    });
  });
});
router.post('/auth/twitter', function(req, res) {
  var requestTokenUrl = 'https://api.twitter.com/oauth/request_token';
  var accessTokenUrl = 'https://api.twitter.com/oauth/access_token';
  var profileUrl = 'https://api.twitter.com/1.1/account/verify_credentials.json';

  // Part 1 of 2: Initial request from Satellizer.
  if (!req.body.oauth_token || !req.body.oauth_verifier) {
    var requestTokenOauth = {
      consumer_key: config.TWITTER_KEY,
      consumer_secret: config.TWITTER_SECRET,
      callback: req.body.redirectUri
    };

    // Step 1. Obtain request token for the authorization popup.
    request.post({ url: requestTokenUrl, oauth: requestTokenOauth }, function(err, response, body) {
      var oauthToken = qs.parse(body);

      // Step 2. Send OAuth token back to open the authorization screen.
      res.send(oauthToken);
    });
  } else {
    // Part 2 of 2: Second request after Authorize app is clicked.
    var accessTokenOauth = {
      consumer_key: config.TWITTER_KEY,
      consumer_secret: config.TWITTER_SECRET,
      token: req.body.oauth_token,
      verifier: req.body.oauth_verifier
    };

    // Step 3. Exchange oauth token and oauth verifier for access token.
    request.post({ url: accessTokenUrl, oauth: accessTokenOauth }, function(err, response, accessToken) {

      accessToken = qs.parse(accessToken);

      var profileOauth = {
        consumer_key: config.TWITTER_KEY,
        consumer_secret: config.TWITTER_SECRET,
        token: accessToken.oauth_token,
        token_secret: accessToken.oauth_token_secret,
      };

      // Step 4. Retrieve user's profile information and email address.
      request.get({
        url: profileUrl,
        qs: { include_email: true },
        oauth: profileOauth,
        json: true
      }, function(err, response, profile) {

        // Step 5a. Link user accounts.
        if (req.header('Authorization')) {
          User.findOne({ twitter: profile.id }, function(err, existingUser) {
            if (existingUser) {
              return res.status(409).send({ message: 'There is already a Twitter account that belongs to you' });
            }

            var token = req.header('Authorization').split(' ')[1];
            var payload = jwt.decode(token, config.TOKEN_SECRET);

            User.findById(payload.sub, function(err, user) {
              if (!user) {
                return res.status(400).send({ message: 'User not found' });
              }

              user.twitter = profile.id;
              user.email = profile.email;
              user.displayName = user.displayName || profile.name;
              user.picture = user.picture || profile.profile_image_url_https.replace('_normal', '');
              user.save(function(err) {
                res.send({ token: createJWT(user) });
              });
            });
          });
        } else {
          // Step 5b. Create a new user account or return an existing one.
          User.findOne({ twitter: profile.id }, function(err, existingUser) {
            if (existingUser) {
              return res.send({ token: createJWT(existingUser) });
            }

            var user = new User();
            user.twitter = profile.id;
            user.email = profile.email;
            user.displayName = profile.name;
            user.picture = profile.profile_image_url_https.replace('_normal', '');
            user.save(function() {
              res.send({ token: createJWT(user) });
            });
          });
        }
      });
    });
  }
});
router.post('/auth/unlink', ensureAuthenticated, function(req, res) {
  var provider = req.body.provider;
  var providers = ['google', 
    'linkedin', 'twitter'];

  if (providers.indexOf(provider) === -1) {
    return res.status(400).send({ message: 'Unknown OAuth Provider' });
  }

  User.findById(req.user, function(err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User Not Found' });
    }
    user[provider] = undefined;
    user.save(function() {
      res.status(200).end();
    });
  });
});



module.exports = router;
*/
router.post('/register',(req,res,next)=>{
  let newUser=new Userm({
name:req.body.name,
email:req.body.email,
username:req.body.username,
password:req.body.password,
role:req.body.role,


 
 });
 Userm.addUser(newUser,(err,userm)=>{
     if(err){
         res.json({
             success:false,msg:"failed"
         });
     }
     else{
         res.json({success:true,msg:"done",userm});
     }

 });
});
router.post('/addassessments',(req,res,next)=>{
  let newAssessment=new Assessmentm({
       
        title:req.body.title,

});
newAssessment.save(function(err,assessment){
    if(err){
    console.log(error);}
    else{
console.log(assessment)}});
/*Assessmentm.addAssessment(newAssessment,(err,assessment)=>{
     if(err){
        console.log(err);
     }
     else{
         res.json({assessment});
     }

});*/
});

 router.get('/getassessment/:subject', function(req, res) {
  
 Assessmentm.findOne({title:req.params.subject}, function(err, assessment) {
            if (err)
              console.log(err);
              else{
            res.json(assessment);
        }
});
    });
 
router.put('/updateassessment/:subject', function(req, res) {
 
 
 Assessmentm.findOneAndUpdate({title:req.params.subject},
 {$set:{
   
 title:req.body.title
 }},
 {new:true},
  function(err,assessment){
      if(err)
      res.send(err);
      else{
          res.json(assessment);
      }
  

 });
    });
     

 
router.put('/subassessment/:subject', function(req, res) {
 
 
 var query = {title:req.params.subject};
var doc = {
       $push: { 
        'domain': {
            title:req.body.name
         }
    }
};
var options = {upsert: true};
Assessmentm.findOneAndUpdate(query, doc, options, function(err,assessment){
    if(err) 
        res.json(err);
    else
        res.json(assessment); 
});
})
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
router.delete('/deleteassessment/:subject', function(req, res) {
    Assessmentm.remove({
            title: req.params.subject
        }, function(err, assessment) {
            if (err)
               console.log(err);
            else{
            res.json(assessment);
           }
        });
    });
 
  


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
        const mytoken = jwt.sign({data: userm}, conn.secret, {
          expiresIn: 86400// 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+mytoken,
          userm: {
            id: userm._id,
            name: userm.name,
            username: userm.username,
            email: userm.email,
            role:userm.role
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});


router.get('/profilem',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    //console.log(req.user);
res.json({userm:req.user});
});
router.get('/questions',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
  //console.log(req.user);
res.json({userm:req.user});
});
router.get('/getassessments',(req,res,next)=>{
  //console.log(req.user);
//res.json({assessments:req.user});//yet in doubt
 Assessmentm.find(function(err, assessments) {
            if (err){
               console.log(err);
            }
            else{
                console.log(assessments);
            res.json(assessments);}
});
});
//google+twitter+linkedin
// auth login
/*router.get('/login', (req, res) => {
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
        });
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
//only linkedin
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
                    const mytoken = jwt.sign({
                        emailAddress: body.emailAddress
                    }, conn.secret, {
                        expiresIn: '24h'
                    });

                    let user = new User({
                        email: body.emailAddress,
                        username: body.firstName + " " + body.lastName
                    });

                    user.save((err) => {
                        if (err) {
                            if (err.code === 11000) {
                                res.json({
                                    token: mytoken,
                                    message: 'Username or e-mail already exists',
                                    user: {
                                        email: body.emailAddress,
                                        username: body.firstName + " " + body.lastName
                                    }
                                });
                            }
                        } else {
                            res.json({
                                token: mytoken,
                                message: 'User Registered',
                                user: {
                                    email: body.emailAddress,
                                    username: body.firstName + " " + body.lastName
                                }
                            });
                        }
                    });

                });
            }
        });

    });*/
module.exports = router;
