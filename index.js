var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://mongodb-26-rhel7.mle.srv.cluster.local:27017/shop", function (err, db) {
   
     if(err) {
         console.log("There was an error connecting : " + err);
         throw err;
     } else {
        console.log("Connected");
     }

     //Write databse Insert/Update/Query code here..
            
});