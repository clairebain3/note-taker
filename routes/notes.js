const express = require("express");
const notes = express.Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
// const uuid = require("../helpers/uuid");

// GET Route for retrieving all the tips
notes.get("/", (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error("Error in adding tip");
  }
});

module.exports = notes;
