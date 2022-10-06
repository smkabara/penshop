// THis will import the express module
import express from 'express';

const app = express();

app.get("/",(reg, res) => {
    res.send("API is Up and Running!");
});

app.listen(5000, console.log("Our Server is Up!"));