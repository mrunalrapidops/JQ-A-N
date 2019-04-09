var fs =require('fs');
var readme = fs.readFileSync('./Externalfile/data.txt','utf-8');
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
//var cors = require("cors");
var cors = require('cors');
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo",{ useNewUrlParser: true });
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
   });
mongoose.set('useFindAndModify', false);
var User = mongoose.model("User", nameSchema);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = 3000;

app.get("/datafile", (req, res) => {
    res.sendfile('./Externalfile/data.txt');
});  

app.get("/", (req, res) => {
    /* app.use(cors()) // Use this after the variable declaration */
    res.sendFile(__dirname + "/home.html"); 
});

app.get("/getdata", (req, res) => {
    User.find({}, function(err, data){
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      //res.send(req.body);
      res.json(data);
       // res.send(data);
        console.log(">>>> " + data );
    });
});


app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });

  app.delete("/delete", (req, res) => {
    /* console.log(req.body.id);*/
    /* in postman body->x-www-form-urlencoded->give id and value */
   User.findOneAndDelete({ _id: req.body.id}, function(err) {
      //console.log(JSON.stringify(req.params));
      if (!err) {
          res.send("item delete from database");
      }
      else {
          res.send("item not delete from database");
      }
    });
  });

  app.put("/update", (req, res) => {
  //var myData = new User(req.body);
    User.findOneAndUpdate({ _id: req.body.id},{$set: {firstName:req.body.firstName,lastNameName:req.body.lastNameName}}, function(err) {
    if (!err) {
        res.send("item update in database");
      }
      else {
          res.send("item not update in database");
      }
    });
  });
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

  
   /* console.log(req.params.id);
    console.log(req.params['id']); */
    /* req.params => use when we send with URL */
    /* req.body => use when we send as body */
    /* req.query */ 
    /* working with req.params['id'] */
/* app.delete("/delete/:id", (req, res) => {
    console.log(req.params['id']);
    console.log(req.query);
   User.findOneAndDelete({ _id: req.params.id }, function(err) {
      console.log(JSON.stringify(req.params));
      if (!err) {
          res.send("item delete from database");
      }
      else {
          res.send("item not delete from database");
      }
    });
  });
 */

/*
MVC
const express = require('express');
const bodyParser = require('body-parser'); */
//const product = require('./routes/product.router');
//const router = express.Router();
//const product_controller = require('../controller/product.controller');
//const Product = require('../models/product.model');
/* const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Product= new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
}); */ 
//module.exports = mongoose.model('Product', ProductSchema);
/* router.get('/products/test', function (req, res) {
    res.send('Greetings from the Test controller!');
});
const app = express();
app.use('/products', Product);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
}); */
/* 
 */
/*  original */
/* const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.router'); // Imports routes for the products
const app = express();
app.use('/products', product);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
 */
/* var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res, next) {
  Post.find(function(err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  })
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.json(201, post)
  })
})

app.listen(3000, function () {
  console.log('Server listening on', 3000)
}) */

