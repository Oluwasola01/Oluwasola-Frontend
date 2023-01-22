//libraries


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//access to MongoDB (set-up with MongoDB Atlas)
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Group6:QZzc4rbmdX8Ab7pv@funtastic-friends.tuwfp0v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("sample_analytics").collection("accounts");
  // perform actions on the collection object
  //client.close();
  // Find all documents in the sample_data collection
  collection.find({}).toArray((err, docs) => {
    if (err) throw err;
    console.log(docs);
    client.close();
  });
});


