var express = require("express");
var router = express.Router();


router.get("/", function(req, res, next) {
    res.send("Curly you better get a fucking A....");
});


module.exports = router;