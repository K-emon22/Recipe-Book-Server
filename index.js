const express = require("express");
const app = express();
const {MongoClient, ServerApiVersion} = require("mongodb");
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// RecipeBookMongodbxxxxxokDone
// RecipeBook

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("Recipes");
    const recipeCollection = database.collection("foods");

    app.get("/recipes", async (req, res) => {
      const recipes = await recipeCollection.find().toArray();
      res.send(recipes);
    });

    app.get("/sortSix", async (req, res) => {
      const topSix = await recipeCollection
        .find()
        .sort({likeCount: -1})
        .limit(6)
        .toArray();

      res.send(topSix);
    });
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Backend is walking");
});

app.listen(port, () => {
  console.log(`backend is running on port ${port} `);
});
