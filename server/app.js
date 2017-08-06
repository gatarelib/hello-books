const express = require("express"); 
const app = express(); 
const router = require("./routes/router.js");

app.listen(3000, () => {
    console.log("Listening on port 3000!"); 
});

app.use("/", router);
