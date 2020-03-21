const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    mongoURI: process.env.MONGO_URL,
    googleClientID: process.env.GOOGLE_ID,
    googleClientSecret: process.env.GOOGLE_SECRET
}