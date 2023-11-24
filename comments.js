//Create web server
const express = require("express");
const app = express();
const port = 3000;
//Create database connection
const db = require("./db");
//Create router
const commentRouter = require("./routers/comment.router");

//Create middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Create router
app.use("/comment", commentRouter);

//Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});