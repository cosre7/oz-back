import express from "express";

const router = express.Router();

let postId = 1;
const posts = [
    {
        id: postId,
        title: "Post 1",
        content: "Content 1",
    },
];

/**
 * method: GET
 * path: /posts
 * description: Get all posts
 * response: 200 OK
 * body: {}
 */
router.get("/", (req, res) => {
    console.log(`${req.method} ${req.baseUrl}${req.path}`);
    res.json(posts);
});

/**
 * method: POST
 * path: /posts
 * description: Create a new post
 * response: 201 Created
 * body: {}
 */
router.post("/", (req, res) => {
    console.log(`${req.method} ${req.baseUrl}${req.path}`);
    const newPost = {
        id: ++postId,
        title: req.body.title,
        content: req.body.content,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

/**
 * method: put
 * path: /posts/:id
 * description: Update a post
 * response: 200 OK
 * body: {}
 */
router.put("/:id", (req, res) => {
    console.log(`${req.method} ${req.baseUrl}${req.path}`);
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
        return res.status(404).json({ message: "Post not found" });
    }
    posts[postIndex].title = req.body.title;
    posts[postIndex].content = req.body.content;
    res.json(posts[postIndex]);
});

/**
 * method: delete
 * path: /posts/:id
 * description: Delete a post
 * response: 200 OK
 * body: {}
 */
router.delete("/:id", (req, res) => {
    console.log(`${req.method} ${req.baseUrl}${req.path}`);
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
        return res.status(404).json({ message: "Post not found" });
    }
    posts.splice(postIndex, 1);
    res.json({ message: "Post deleted" });
});

export default router;
