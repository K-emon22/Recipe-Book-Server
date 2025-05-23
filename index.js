const express = require("express");
const app = express();
const {MongoClient, ServerApiVersion, ObjectId} = require("mongodb");
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;


const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
  },
});

async function run() {
  try {
    // await client.connect();

    const database = client.db("Allrecipes");
    const recipeCollection = database.collection("AllFoods");

    app.get("/recipes", async (req, res) => {
      const recipes = await recipeCollection.find().toArray();
      res.send(recipes);
    });

    app.get("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const result = await recipeCollection.findOne({_id: new ObjectId(id)});
      res.send(result);
    });

    app.post("/recipes", async (req, res) => {
      const newRecipe = req.body;

      const addNewRecipe = await recipeCollection.insertOne(newRecipe);
      res.send(addNewRecipe);
    });
    app.patch("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const result = await recipeCollection.updateOne(
        {_id: new ObjectId(id)},
        {$inc: {likeCount: 1}}
      );

      res.send(result);
    });

    app.put("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const user = req.body;
      const updateRecipe = {
        $set: {
          image: user.image,
          title: user.title,
          ingredients: user.ingredients,
          preparationTime: user.preparationTime,
          cuisine: user.cuisine,
          instructions: user.instructions,
          category: user.category,
        },
      };
      const result = await recipeCollection.updateOne(filter, updateRecipe);
      res.send(result);
    });

    app.delete("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const remove = await recipeCollection.deleteOne({_id: new ObjectId(id)});
      res.send(remove);
    });

    app.get("/sortSix", async (req, res) => {
      const topSix = await recipeCollection
        .find({likeCount: {$gt: 0}})
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
  res.send("BackEnd is walking");
});

app.listen(port, () => {
  console.log(`backend is running on port ${port} `);
});
