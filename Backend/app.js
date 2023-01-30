//libraries


const express = require('express')

var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = 3003
var jsonParser = bodyParser.json()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.post("/PersonalityQuest", jsonParser, (req, res) => {
  console.log(req.body);
  res.send('good job brah! ;)')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//access to MongoDB (set-up with MongoDB Atlas)
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Group6:QZzc4rbmdX8Ab7pv@funtastic-friends.tuwfp0v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Funtastic-Friends").collection("Users");
  // perform actions on the collection object
  //client.close();
  //Insert a document into the db
  collection.insertOne({
    username: "Alex",
    password: "xyz"
  });
  // Find all documents in the sample_data collection
  collection.find({}).toArray((err, docs) => {
    if (err) throw err;
    console.log(docs);
    client.close();
  });
});


