**Used Book Swapping Platform Overview:The application is designed to help students or readers to swap their used books. It extends the task manager app by reusing the user authentication feature, and adding book‑swap–specific features such as listings, search, and simple swap requests.**

**This apps **contain** the following features:**

* Signup(pre-built)
* Login(pre-built)
* Logout(pre-built)
* Create Book Listing
* Edit Book Listing
* Delete Book Listing
* Search Book Listing
* View Book Listing
* View all the available book lists
* View a specific user's available books
* Request book swaps
* View swapped book lists

**Project Setup Instructions**
1. Clone the repository
git clone https://github.com/azou0/UsedBookSwap.git
cd UsedBookSwap

2. Install dependencies
npm install

3. Set up environment variables

Create a .env file in the root folder with the following:

MONGO_URI=<mongodb+srv://IFN636_new_user_0:Zq2317922967.@ifn636cluster0.xd9gpde.mongodb.net/IFN636_Database0?retryWrites=true&w=majority&appName=IFN636Cluster0>
JWT_SECRET=2J8zqkP7VN6bxzg+Wy7DQZsd3Yx8mF3Bl0kch6HYtFs=
PORT=5001

4. Start the server
npm run dev
