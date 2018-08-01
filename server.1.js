const express = require("express");
//const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//sigin-validation logic




var isValid=false;

app.get('/auth',(req,res)=>{
  res.json(isValid)
});

var users=[{
  name:"justin",
  password:"climbing"
},
{
  name:"mike",
  password:"legos"
},
{
  name:"ji",
  password:"javascript"
},
{
  name:"brian",
  password:"lawyer"
},
{
  name:"ed",
  password:"artt"
}]

app.post('/submit',(req,res)=>{
  var submittedUser={
    name:req.body.username,
    password:req.body.password
}

var indexOfUser= users.findIndex(i => i.name === submittedUser.name);

if(submittedUser.password === users[indexOfUser].password){

console.log(submittedUser.password);
console.log('nailed it!')
loggedIn=true;
} 
else{loggedIn=false;}

res.json(loggedIn)
});






// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Define API routes here
const routes = require("./routes/api.js");
app.use(routes);

// Send every other request to the React app
//app.get("*", (req, res) => {
 // res.sendFile(path.join(__dirname, "./client/build/index.html"));
//});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/artdb");

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
