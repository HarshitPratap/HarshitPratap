const express = require('express');
const app = express();
const user = require("./routes/users");

app.use("/user",user);
app.get('/',(req,res) => {
    res.status(200).send("hello world!");
});

app.listen(3000, ()=>{
    console.log("Server up and running...");
})