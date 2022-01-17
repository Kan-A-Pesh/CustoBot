const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,

  API_PORT: process.env.API_PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  
  PORT: process.env.PORT,
  BASE_URL: process.env.BASE_URL,

  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  CLIENT_REDIRECT_URL: process.env.CLIENT_REDIRECT_URL
};