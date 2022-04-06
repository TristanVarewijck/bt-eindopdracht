var express = require("express");
var router = express.Router();
let methodOverride = require("method-override");
router.use(methodOverride("_method"));
const multer = require("multer");

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

// MULTER
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.substring(
      file.originalname.lastIndexOf("."),
      file.originalname.length
    );
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});
let upload = multer({ storage: storage }).single("file");

/* GET users listing. */
router.get("/photo/:id/update", upload, function (req, res, next) {
  let detailItem;

  for (let i = 0; i < localStorage.length; i++) {
    detailItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
  }

  res.render("update", {
    detailItem,
  });
});

router.put("/photo/:id/update", function (req, res, next) {
  // console.log(req.body);
  // let photoUpdate = {
  //   title: req.body.title,
  //   location: req.body.location,
  //   description: req.body.description,
  //   image: req.body.file,
  // };

  console.log(photoUpdate);

  // const jsonObj = JSON.stringify(photoUpdate);
  // localStorage.setItem(id, jsonObj);
  // res.redirect(`/movies/${updatedMovie._id}`);
  res.redirect("/");
});

module.exports = router;
