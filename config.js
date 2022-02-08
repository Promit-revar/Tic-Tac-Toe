
var admin = require("firebase-admin");
const env=require("dotenv");
env.config();


admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://tictactoe-82314-default-rtdb.firebaseio.com"
});




module.exports=admin;