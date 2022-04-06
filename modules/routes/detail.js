let express = require("express");
let router = express.Router();
let methodOverride = require("method-override");
router.use(methodOverride("_method"));

/* GET 1 PICUTRE. */
router.get("/photo/:id", function (req, res, next) {
  let { id } = req.params;
  let detailItem = JSON.parse(localStorage.getItem(id));
  res.render("detail", { detailItem: detailItem, title: "Detail" });
});

// DELETE THIS ITEM
router.delete("/photo/:id", (req, res) => {
  let { id } = req.params;
  localStorage.removeItem(id);

  res.redirect("/");
});
module.exports = router;
