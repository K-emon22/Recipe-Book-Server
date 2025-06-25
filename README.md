
# 🍽️ Recipe Book - Backend

This is the backend API for the **Recipe Book** project, built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/K-emon22/Recipe-Book-Server.git
cd Recipe-Book-Server

	2.	Install dependencies

npm install

	3.	Create a .env file in the root folder with the following content:

PORT=3000
MONGO_URI=your_mongodb_connection_string

	4.	Run the server

node index.js


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
	•	MongoDB (with MongoDB Atlas)
	•	dotenv
	•	CORS

⸻
