

  var express = require('express')
  var formidable = require('express-formidable');
  var app = express(); // calling the express() function will initialize the server

  app.use(express.static("public"));

  app.use(formidable());


  app.post('/create-post', function (req, res) {
    console.log(req.fields);
    console.log('/create-post')
  });

  app.listen(3000, function() { // set a port for the  server to listen to 
    console.log('Server is listening on port 3000. Ready to accept requests eheheheheh!');
  });

 

  // app.listen() takes two args - port and a callback function - telling it what to do once the server
  // is running 

  // I will run the server on port 3000, and call console.log in the callback function
  // run the server by typing: node server.js