const express = require("express");


const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from auth");
});


router.post("/register", (req, res) => {
    res.send("Register");
});




//Exporto el router de auth
module.exports = router