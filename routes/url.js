const express = require("express")
const router = express.Router();
const {GenerateNewShorturl}= require("../controllers/url")


router
    .route("/URL")
    .post(GenerateNewShorturl);


router
    .route("/:id") 
    .get();
    
router
    .route("/URL/analytics/:id")   
    .get();
module.exports = router;