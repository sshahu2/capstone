const TwitterStrategy=require('passport-twitter').Strategy;
module.exports=function(app,passport){
passport.use(new TwitterStrategy({
    consumerKey: keys.twitter.clientID,
    consumerSecret: keys.twitter.clientSecret,
    callbackURL: '/auth/twitter/redirect'
  },
  (token, tokenSecret, profile, done)=> {
        // check if user already exists in our own db
       // console.log(profile);
        //console.log(token);
        User.findOne({twitterId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                return done(null, currentUser);
                //done(null,currentUser);
                // do something
            } else {
                // if not, create user in our db
                new User({
                    twitterId: profile.id,
                    username: profile.displayName,
                    //thumbnail:profile._json.image.url
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    return done(null, newUser);
                   // done(null,newUser);
                    // do something
                });
            }
        });
    }
));
return passport;
}