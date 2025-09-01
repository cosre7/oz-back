import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/test", (req, res) => {
    res.send("test World!");
});

router.get("/test2/:testId", (req, res) => {
    const params = req.params;
    const query = req.query;
    const body = req.body;
    const headers = req.headers;
    console.log(params, query, body, headers);
    res.send("test2 World!");
});

router.post("/test2/:testId", (req, res) => {
    const params = req.params;
    const query = req.query;
    const body = req.body;
    const headers = req.headers;
    console.log(params, query, body, headers);
    res.send("test2 World!");
});

export default router;
