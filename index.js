const express = require("express");
const urlRoute = require("./routes/url");
const {connectToMongodb}= require("./connect")

const mongoose = require("mongoose");

const app = express();
const port = 8001;

app.use(express.urlencoded({extended:false}))   
app.use(express.json());

connectToMongodb("mongodb://127.0.0.1:27017/short-url")

app.use("/url",urlRoute)

app.get("/:shortId",async (req,res) =>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push : {
        visitHistory : Date.now()
    }})
    return res.redirect(entry.redirectURL);
});
app.listen(port,()=>{console.log(`Server running on port ${port}`)})