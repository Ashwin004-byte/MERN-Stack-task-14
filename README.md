# Task 14 - Search, Sort and Filter Functionality

## Project Overview

This project demonstrates Search, Sort, and Filter functionality using Node.js, Express.js, MongoDB, and Mongoose.

The application allows users to:

* Add products
* Search products by name
* Filter products by category
* Sort products by price

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API

---

## Features

### Add Product

Create and store product information in MongoDB.

### Search Product

Search products using product name.

### Filter Products

Filter products based on category.

### Sort Products

Sort products by price in:

* Ascending Order
* Descending Order

---

## API Endpoints

### Get All Products

GET

```http
/products
```

### Add Product

POST

```http
/products
```

### Search Product

GET

```http
/products/search?name=laptop
```

### Filter Products

GET

```http
/products/filter?category=Electronics
```

### Sort Products

Ascending:

```http
/products/sort?order=asc
```

Descending:

```http
/products/sort?order=desc
```

---

## Database

MongoDB Database:

```text
task14db
```

Collection:

```text
products
```

---

## Learning Outcomes

* MongoDB Query Operations
* Search Functionality
* Filtering Logic
* Sorting Logic
* Mongoose Query Methods
* REST API Development

---

## Interview Questions

### How to implement search in MongoDB?

Using:

```javascript
Product.find({
  name: {
    $regex: searchTerm,
    $options: "i"
  }
});
```

### How does sorting work?

```javascript
Product.find().sort({ price: 1 });
```

```text
1  = Ascending
-1 = Descending
```

### Why use filtering?

Filtering helps users retrieve only relevant data from large datasets.

---

## Author

Ashwin Arun Lokhande
MERN Stack Developer Intern

<img width="577" height="719" alt="Screenshot 2026-06-16 111520" src="https://github.com/user-attachments/assets/e8b1fd78-b580-4213-a15f-7b057d75edac" />
<img width="710" height="637" alt="image" src="https://github.com/user-attachments/assets/3b010b82-95f6-49b5-a591-5dad1f616285" />
