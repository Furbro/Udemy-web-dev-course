import express from "express";

const app = express();
const port = 3000;

app.listen(port /*port*/, () => {
  console.log(`This server is running on port ${port}`); /*callback function*/
});
