import express from "express";

const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.send("gym/get");
  })
  .post((req, res) => {
    res.send("gym/post");
  });

router.route("/:id")
  .get((req, res) => {
    res.send("gym/get");
  })
  .put((req, res) => {
    res.send("gym/put");
  })
  .delete((req, res) => {
    res.send("gym/delete");
  });

export default router;