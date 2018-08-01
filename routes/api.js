const router = require("express").Router();
const user = require("../models/users.js");
const comments = require("../models/users.js");

router.post("/api", function(req, res){
    console.log(req.body);
   /* user.create(req.body).then(()=>{
        res.json(true);
    }).catch((err) => {
        res.json(err)
    }); */
    res.send("got it ace!")
});


router.post("/:id/newpost", function(req, res){
    console.log("hello", req.body);
    user.update({
        "_id": req.params.id},
        {"$push":
    {
        "Post":{
            "postName": req.body.postName,
            "postDescription": req.body.postDescription,
            "link": req.body.link
        }}
    }).then(()=>{
    res.json(true);
}).catch((err) => {
    res.json(err)
});
});

router.post("/:id/:Postid/comments", function(req,res){
    console.log("sasdasd", req.body.comments);
    
    user.update({
       "_id": req.params.id, "Post._id":req.params.Postid
    },
    {"$push":
{"Post.$.comments": req.body.comments}
   
}
    )
.then(()=>{
    res.json(true);
}).catch((err) => {
    res.json(err)
});
});

router.post("/:id/:Postid/rating", function(req,res){
    console.log("sasdasd");
    user.update({
       "_id": req.params.id, "Post._id":req.params.Postid
    },
    {"$push":
{"Post.$.postRating": req.body.postRating}
    
    })
.then(()=>{
    res.json(true);
}).catch((err) => {
    res.json(err)
});
});

 
router.get("/api/users", function(req,res){
    console.log("hello");
    user.find().then((docs)=>{res.json(docs);
    });
});


 router.get("/api/:id", function(req,res){
     console.log("hello")
      user.findOne({
          _id: req.params.id
     }).then((docs) => {
          res.json(docs);
       
      });
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
 //Route to handle log-in... should be connect to database
 router.post('/submit',(req,res)=>{
    var submittedUser={
      name:req.body.username,
      password:req.body.password
  }
  
//  db.Users....BLAH BLAH BLAH
// module.exports = (app) => {
//     app.get('/api/users', (req, res) => {
//       db.user.findAll({
//         include: [db.note]
//       }).then((dbUser) => {
//         res.json(dbUser);
//       });
//     });
  
  var indexOfUser= users.findIndex(i => i.name === submittedUser.name);
  
  if(submittedUser.password === users[indexOfUser].password){
  
  console.log(submittedUser.password);
  console.log('nailed it!')
  loggedIn=true;
  } 
  else{loggedIn=false;}
  
  res.json(loggedIn)

  });

  var isValid=false;

  router.get('/auth',(req,res)=>{
    res.json(isValid)
  });
 
//    router.post("/api/:id/comments", function(req,res) {
//       console.log("hello")
//       user.findOneAndUpdate(
          
     //   {"Post": req.params.id}, {$push: {"comments": req.params.body}}
        
//       ).then(()=>{
//         res.json(true);
//     }).catch((err) => {
//         res.json(err)
//     });
//       console.log("working")
//        .then(()=>{res.json(true);}).catch((err)=>{res.json(err)
//       });
//   });

//   router.post("/api/Post/:id/ratings", function(req,res){
//       console.log("please work")
//       user.Post.postRating.push(
       
//         {id: req.params.ObjectId}
//       )
//   })

  

 

module.exports = router;