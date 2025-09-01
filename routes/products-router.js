import express from "express";

const router = express.Router();

let productId = 1;
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
    },
];

/**
 * Method: GET
 * Path: /products
 * Description: Get all products
 * Response: 200 OK
 * Body: {}
 */
router.get("/", (req, res) => {
    console.log(`${req.method} ${req.baseUrl}${req.path}`);
    res.json(products);
});

/**
 * Method: POST
 * Path: /products
 * Description: Create a new product
 * Response: 201 Created
 * Body: {}
 */
router.post("/", (req, res) => {
    console.log(`${req.method} ${req.baseUrl}${req.path}`);
    const newProduct = req.body;
    productId++;
    newProduct.id = productId;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

/**
 * method: PUT
 * Path: /products/:id
 * Description: Update a product
 * Response: 200 OK
 * Body: {}
 */
router.put("/:id", (req, res) => {
    console.log(`${req.method} ${req.baseUrl}${req.path}`);
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;
    const product = products.find((p) => p.id === id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    Object.assign(product, updatedProduct);
    res.json(product);
});

/**
 * method: PATCH
 * Path: /products/:id
 * Description: Update a product
 * Response: 200 OK
 * Body: {}
 */
router.patch("/:id", (req, res) => {});

/**
 * method: DELETE
 * Path: /products/:id
 * Description: Delete a product
 * Response: 200 OK
 * Body: {}
 */
router.delete("/:id", (req, res) => {
    console.log(`${req.method} ${req.baseUrl}${req.path}`);
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    products.splice(productIndex, 1);
    res.json({ message: "Product deleted" });
});
export default router;
