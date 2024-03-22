/* const express = require("express");
const app = express(); */
// aboe is the old method of instanciating express. we will import it instead
import express from "express";
const app = express();
app.use(express.static("public"));

import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);


const port = 8080;
app.listen(port, () => console.log("server is running on port", port));
