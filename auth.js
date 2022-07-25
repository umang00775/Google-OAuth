const passport= require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = "520503138012-ui9enrhs8s6qte8amrp0amldptm1uh52.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user,done)=>{
    done(null, user);
});



passport.deserializeUser((user,done)=>{
    done(null, user);
});
