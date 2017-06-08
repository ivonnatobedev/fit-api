import express from "express";

const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.send("trainingType/get");
  })
  .post((req, res) => {
    res.send("trainingType/post");
  });

router.route("/:id")
  .get((req, res) => {
    res.send("trainingType/get");
  })
  .put((req, res) => {
    res.send("trainingType/put");
  })
  .delete((req, res) => {
    res.send("trainingType/delete");
  });

export default router;