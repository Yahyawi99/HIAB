const express = require("express");
require("dotenv").config();

const next = require("next");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const contact = require("./controllers/contact");
    const server = express();

    // middleware
    server.use(express.json());

    server.post("/api/contact", contact);

    server.get("*", (req, res) => {
      return handler(req, res);
    });

    server.listen(5000, (err) => {
      if (err) throw err;
      console.log(`Ready on 5000...`);
    });
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
