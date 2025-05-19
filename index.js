const express = require("express");
const app = express();
const {MongoClient, ServerApiVersion} = require("mongodb");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// RecipeBookMongodbxxxxxokDone
// RecipeBook

const uri =
  "mongodb+srv://RecipeBook:RecipeBookMongodbxxxxxokDone@recipebook.d89ba1r.mongodb.net/?retryWrites=true&w=majority&appName=RecipeBook";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ping: 1});
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();  
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Backend is walking");
});

app.listen("/", (req, res) => {
  console.log(`backend is running on port ${port} `);
});
