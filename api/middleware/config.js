const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const capital = require("./capitalizeName");

module.exports = server => {
  server.use(express.json());
  server.use(helmet());
  server.use(morgan("combined"));
  server.use(capital);
  server.use(cors());
};
