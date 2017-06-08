import express from "express";

const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.send("exerciseType/get");
  })
  .post((req, res) => {
    res.send("exerciseType/post");
  });

router.route("/:id")
  .get((req, res) => {
    res.send("exerciseType/get");
  })
  .put((req, res) => {
    res.send("exerciseType/put");
  })
  .delete((req, res) => {
    res.send("exerciseType/delete");
  });

export default router;