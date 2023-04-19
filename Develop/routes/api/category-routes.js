const router = require("express").Router();
const { Router } = require("express");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((Products) => {
    res.json(Products);
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    // Gets the Category based on the id given in the request parameters
    where: {
      id: req.params.id,
    },
  }).then((Products) => {
    res.json(Products);
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  const categoryData = Category.update(
    {
      id: req.body.id,
    },
    {
      where: {
        _id: req.params.category_id,
      },
    }
  );

  return res.json(categoryData);
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      category_id: req.params.category_id,
    },
  });

  return res.json(categoryData);
});

module.exports = router;
