var express = require('express');
var router = express.Router();

const {MongoClient} = require('mongodb');
var mongoose = require("mongoose");

/* GET home page. */
router.get('/', function(req, res, next) {
  (async function() {
    const collections = await getCollections();
    res.render('index', { title: 'Express TG' });
  })();
});

module.exports = router;



// -*-*-*-*-*-*-*-*-*-*-*-*-* DB FUNCTIONS -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//
async function getCollections(){
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
      await client.connect();
      const cursor = client.db("shop").collection("bruja").find({active: true}).sort({collectionId:1});
      const results = await cursor.toArray();
      return results;
  } catch (e) { console.error(e); }
  finally { await client.close(); }
}