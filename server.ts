import express from "express";
import serveStatic from "serve-static";
import ip from "ip";
import chalk from "chalk";

// var express = require("express");
// var serveStatic = require("serve-static");

const app = express();
const port = 3000;
const index = "index.html";

app.use(serveStatic("dist", { index: [index] }));
const address = `http://${ip.address()}:${port}`;
const localHostAddr = `http://localhost:${port}`;
app.listen(port, () => {
  console.log(`I'm listening at: ${chalk.green.bold(address)}`);
  console.log(`I'm listening at: ${chalk.green.bold(localHostAddr)}`);
});
