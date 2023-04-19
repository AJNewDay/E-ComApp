const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll().then((Product) => {
    res.json(Product);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    // Gets the Tag based on the id given in the request parameters
    where: {
      id: req.params.id,
    },
  }).then((Product) => {
    res.json(Product);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      name: req.params.id,
    },
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  const tagData = Tag.destroy({
    where: {
      tag_id: req.params.tag_id,
    },
  });

  return res.json(tagData);
});

module.exports = router;
