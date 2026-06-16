const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Product = require("./Models/Product");

const app = express();

app.use(express.json());
app.use(cors());

  mongoose.connect("mongodb://127.0.0.1:27017/task14db")
  .then(() => {
    console.log(
      "MongoDB Connected Successfully"
    );
  })
  .catch((err) => {
    console.log(err);
  });

// Home Route
app.get("/", (req, res) => {
  res.send(
    "Search Sort Filter API Running"
  );
});

// Add Product
app.post("/products", async (req, res) => {
  try {
    const product =
      await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Products
app.get("/products", async (req, res) => {
  try {
    const products =
      await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Search Product
app.get(
  "/products/search",
  async (req, res) => {
    try {
      const { name } = req.query;

      const products =
        await Product.find({
          name: {
            $regex: name,
            $options: "i",
          },
        });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// Filter By Category
app.get(
  "/products/filter",
  async (req, res) => {
    try {
      const { category } = req.query;

      const products =
        await Product.find({
          category,
        });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// Sort By Price
app.get(
  "/products/sort",
  async (req, res) => {
    try {
      const { order } = req.query;

      const products =
        await Product.find().sort({
          price:
            order === "asc" ? 1 : -1,
        });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running on Port ${PORT}`
  );
});