const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");


const app = express();

app.use(passport.initialize());

// Configure Passport to use Google OAuth 2.0 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you would typically find or create a user in your database
      // For this example, we'll just return the profile
      return done(null, profile);
    },
  ),
);

// Route to initiate Google OAuth flow
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
