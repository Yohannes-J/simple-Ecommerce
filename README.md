
🛒 simple-Ecommerce
A basic e-commerce web application built with HTML, CSS, JavaScript for the frontend, Express.js for the backend, and MongoDB as the database. It supports core features like product browsing, shopping cart, order placement, and admin product management.
📄 Description
This simple e-commerce system allows users to register, browse products, add items to a shopping cart, and place orders by providing delivery details. Admin users can log in with predefined credentials to manage products and view customer orders.
There are two main actors in the system:
Users (Buyers): Can register, log in, add products to cart, manage quantities, remove items, and place delivery orders.
Admin: Can log in using secure credentials, add/update/delete products, and view all placed orders by users.
This project is designed for educational and demonstration purposes, showcasing a full-stack web application with a clean separation of frontend and backend logic.
✅ Features
🧑‍💼 User (Buyer)
Register with name, email, and password
Browse available products
Add products to the shopping cart
Update quantities or remove items from cart
Submit delivery address to place an order
View all past orders
🛠️ Admin
Login with credentials stored in .env file
Add new products
Edit and delete existing products
View all user orders
🚀 Getting Started
🔧 Backend Setup
Navigate to the backend folder.
Install dependencies:
npm install 
Create a .env file and add:
ADMIN_EMAIL=admin123@gmail.com ADMIN_PASSWORD=12345678 
Start the server:
npm start 
🌐 Frontend Setup
Open Home.html using Live Server to access the User Interface.
Open admindashboard.html using Live Server to access the Admin Dashboard.
🔐 Default Admin Credentials
Email: admin123@gmail.com
Password: 12345678
(These are stored securely in the backend .env file.


![alt text](https://github.com/Yohannes-J/simple-Ecommerce/raw/main/prolist.png)
![alt text](https://github.com/Yohannes-J/simple-Ecommerce/raw/main/listpro.png)
![alt text](https://github.com/Yohannes-J/simple-Ecommerce/raw/main/home.png)
![alt text](https://github.com/Yohannes-J/simple-Ecommerce/raw/main/crt.png)
![alt text](https://github.com/Yohannes-J/simple-Ecommerce/raw/main/admindash.png)



