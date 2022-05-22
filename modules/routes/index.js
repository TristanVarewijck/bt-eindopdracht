var express = require("express");
var router = express.Router();
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

router.get("/", function (req, res, next) {
  // categories
  let items = [];

  for (var i = 0; i < localStorage.length; i++) {
    items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  // filter items on categorie so i can put then in the caroussels
  const summer = items.filter((item) => item.categorie === "summer");
  const fall = items.filter((item) => item.categorie === "fall");
  const winter = items.filter((item) => item.categorie === "winter");
  const spring = items.filter((item) => item.categorie === "spring");

  res.render("index", {
    title: "Photo Gallery",
    summer: summer,
    fall: fall,
    winter: winter,
    spring: spring,
  });
});

module.exports = router;
