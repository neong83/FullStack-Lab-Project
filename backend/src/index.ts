import express from "express";
import { router } from "./api/testRoutes";

const app = express();
const port = 8080;

app.use("/api/v1", router);

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
