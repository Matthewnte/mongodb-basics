const MongoClient = require('mongodb').MongoClient;
const { internCollection } = require('./collections/interns')

const url = 'mongodb://localhost:27017/mydb';
const slackUsername = 'Matthewnte';

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db('internDb');
  dbo.createCollection('interns', internCollection);
  console.log(`Database created by ${slackUsername}`);
  db.close;
});