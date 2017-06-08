import express from "express";

const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.send("users/get");
  })
  .post((req, res) => {
    res.send("users/post");
  });

router.route("/:id")
  .get((req, res) => {
    res.send("get");
  })
  .put((req, res) => {
    res.send("put");
  })
  .delete((req, res) => {
    res.send("delete")
  });


export default router;