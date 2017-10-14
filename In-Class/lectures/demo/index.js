const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017/dbName';

MongoClient.connect(uri, (err,db) => {
  if(err) {
    console.log(`Error connecting to database${err}`);
  }
  console.log('Connected successfully to database');

  insertDocuments(db, () => {
    updateDocument(db, () => {
      removeDocument(db, () => {
        findAllDocuments(db, () => {
          db.close();
        });
      });
    });
  });
});


function insertDocuments(db, callback) {
  const collection = db.collection('node-test');
  const data = [{a : 1}, {a : 2}, {a : 3}];

  collection.insertMany(data, (err, result) => {
    if (err) {
      console.log(`Unable to insert documents: ${data}`);
    }

    console.log('Inserted documents into collection');
    callback(result);
  });
}

function findAllDocuments(db, callback) {
  const collection = db.collection('node-test');

  collection.find({}).toArray((err, docs) => {
    console.log('found the following records:');
    console.log(docs);
    callback(docs);
  });
}

function updateDocument (db, callback) {
  const collection = db.collection('node-test');

  collection.updateOne({a : 2}, { $set: {b : 1} }, (err, result) => {
           //find this ^ instance  ^ update/add with this instance only to 1st one
    console.log('Updated the document with the field a equal to 2');
    callback(result);
  });
}

function removeDocument (db, callback) {
  const collection = db.collection('node-test');

  collection.deleteOne({a : 3}, (err, result) => {
    console.log('Removed document where a equals 3');
    callback(result);
  });
}
