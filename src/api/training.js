import express from "express";

const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.send("training/get");
  })
  .post((req, res) => {
    res.send("training/post");
  });

router.route("/:id")
  .get((req, res) => {
    res.send("training/get");
  })
  .put((req, res) => {
    res.send("training/put");
  })
  .delete((req, res) => {
    res.send("training/delete")
  });

export default router;