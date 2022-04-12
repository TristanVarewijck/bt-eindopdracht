var express = require("express");
var router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
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

router.get("/photo/new-photo", function (req, res, next) {
  res.render("create", { title: "New photo" });
});

router.post("/", upload, async (req, res) => {
  let uuid = uuidv4();
  const newPhoto = {
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    image: req.file.filename,
    id: uuid,
  };

  const jsonObj = JSON.stringify(newPhoto);
  localStorage.setItem(uuid, jsonObj);

  res.redirect("/");
});

module.exports = router;
