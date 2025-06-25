
⸻


# 🍽️ Recipe Book - Backend API

This is the backend server for the **Recipe Book** project, built with **Node.js**, **Express**, and **MongoDB**. It provides a RESTful API to manage and interact with recipe data.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/K-emon22/Recipe-Book-Server.git
cd Recipe-Book-Server

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=3000
MONGO_URI=your_mongodb_connection_string

4. Start the Server

node index.js

The server will run on http://localhost:3000 by default.

⸻

📦 API Endpoints

Method	Endpoint	Description
GET	/	Test route
GET	/recipes	Get all recipes
GET	/recipes/:id	Get single recipe by ID
POST	/recipes	Add a new recipe
PUT	/recipes/:id	Update a recipe
PATCH	/recipes/:id	Increment like count of a recipe
DELETE	/recipes/:id	Delete a recipe
GET	/sortSix	Get top 6 recipes by like count


⸻

✅ Example Recipe Object

{
  "image": "https://example.com/image.jpg",
  "title": "Spicy Chicken Curry",
  "ingredients": ["chicken", "onion", "spices"],
  "preparationTime": "45 minutes",
  "cuisine": "Bangladeshi",
  "instructions": "Step-by-step cooking guide",
  "category": "Dinner",
  "likeCount": 0
}


⸻

⚙️ Technologies Used
	•	Node.js
	•	Express.js
	•	MongoDB (using MongoDB Atlas)
	•	dotenv
	•	CORS

⸻

## 🧑‍💻 Author


**Md Emon Sheikh**  

⸻
