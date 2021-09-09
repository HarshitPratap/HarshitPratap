const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.status(200).send("User's get");
});

module.exports = router;