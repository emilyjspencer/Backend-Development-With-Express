

  var express = require('express')
  var app = express(); // calling the express() function will initialize the server

   // handler function 
   app.get("/", function (req, res) {
     res.send("Woo Node!!!!")

  });

  app.listen(3000, function() { // set a port for the  server to listen to 
    console.log('Server is listening on port 3000. Ready to accept requests eheheheheh!');
  });

 

  // app.listen() takes two args - port and a callback function - telling it what to do once the server
  // is running 

  // I will run the server on port 3000, and call console.log in the callback function

  // run the server by typing: node server.js