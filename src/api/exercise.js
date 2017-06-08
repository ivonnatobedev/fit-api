import express from "express";

const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.send("exercise/get");
  })
  .post((req, res) => {
    res.send("exercise/post");
  });

router.route("/:id")
  .get((req, res) => {
    res.send("exercise/get");
  })
  .put((req, res) => {
    res.send("exercise/put");
  })
  .delete((req, res) => {
    res.send("exercise/delete");
  });

export default router;