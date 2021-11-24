// var MongoClient = require('mongodb').MongoClient;

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

 

server.listen(server_port, server_ip_address, function () {

  console.log( "Listening on " + server_ip_address + ", port " + server_port )

});


// // Connect to the db
// MongoClient.connect("mongodb://mongodb-26-rhel7.mle.srv.cluster.local:27017/shop", function (err, db) {
   
//      if(err) {
//          console.log("There was an error connecting : " + err);
//          throw err;
//      } else {
//         console.log("Connected");
//      }

//      //Write databse Insert/Update/Query code here..
            
// });