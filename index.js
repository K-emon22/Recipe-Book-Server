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
 