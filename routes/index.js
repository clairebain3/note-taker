const express = require("express");

// Import our modular routers for /tips and /feedback
const tipsRouter = require("./notes");
// const feedbackRouter = require("./feedback");

const app = express();

/////////////////////////////////////////////////////
// This takes all the routes exported by the tipsRouter module
// and prepends their paths with "/tips":
// /tips GET
// /tips POST
/////////////////////////////////////////////////////
app.use("/notes", tipsRouter);

/////////////////////////////////////////////////////
// This takes all the routes exported by the feedbackRouter module
// and prepends their paths with "/feedback"
// /feedback GET
// /feedback POST
/////////////////////////////////////////////////////
// app.use("/feedback", feedbackRouter);

module.exports = app;