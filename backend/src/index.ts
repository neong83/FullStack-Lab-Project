import express from "express";
import { router as imageRouter } from "./api/imageRoutes";
import { router as fruitRouter } from "./api/fruitRoutes";

const app = express();
const port = 8080;

app.use("/api/v1", router);
// Images
app.use("/images", imageRouter);

// Fruit
app.use("/api/v1/fruits", fruitRouter);

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
