import express from "express";
import bodyParser from "body-parser";
import { initDb } from "./model/database";
import {
  userRouter,
  exerciseRouter,
  trainingRouter,
  exerciseTypeRouter,
  gymRouter,
  imageRouter,
  trainingTypeRouter,
  userTypeRouter
} from "./api";
import { PORT } from "./config/main";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("app start");
    });
  })
  .catch(e => {
    console.log("Error start app", e);
  });

app.use('/', (req, res, next) => {
  next();
});

app.use("/api/users", userRouter);
app.use("/api/exercises", exerciseRouter);
app.use("/api/training", trainingRouter);
app.use("/api/exercise-type", exerciseTypeRouter);
app.use("/api/gym", gymRouter);
app.use("/api/image", imageRouter);
app.use("/api/training-type", trainingTypeRouter);
app.use("api/user-type", userTypeRouter);