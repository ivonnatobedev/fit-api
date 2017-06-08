import express from "express";

const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.send("userType/get");
  })
  .post((req, res) => {
    res.send("userType/post");
  });

router.route("/:id")
  .get((req, res) => {
    res.send("userType/get");
  })
  .put((req, res) => {
    res.send("userType/put");
  })
  .delete((req, res) => {
    res.send("userType/delete");
  });

export default router;