import passport from 'passport';
import { Strategy } from 'passport-google-oauth20'
import keys from '../config/key';

// Define Google Oauth Strategy with Passport
passport.use(new Strategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
}));