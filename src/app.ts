import express from "express";
import config from "./config";
import loader from "./loader";

async function initServer(){
  const app = express();
  await loader(app);
  
  app.listen(config.port, () => {
    console.log("Server listening on port: ", config.port);
  });
}

initServer()
