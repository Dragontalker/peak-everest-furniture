
const testProducts = require("../db/seed.json");
const testTrans = require("../db/transactionsSeed.json");
const testUsers = require('../db/testusers.json')

function apiRoutes(app) {

  app.get("/api/products", (req,res) => {
    console.log("[API Call] Fetching all product info");
    res.send(testProducts);
  })

  app.post("/api/products", (req,res) => {
    console.log("[API Call] Post new product info");
    console.log("Checking credentials:", req.headers.userid);
    // if userid does not have admin access:
    if (false) res.send({error:"Access denied"});
    console.log("Product info:", req.body);
    res.send({ message:"Added new product" });
  })

  app.get("/api/products/:id", (req,res) => {
    console.log("[API Call] Fetching product info for id", req.params.id);
    const filteredproduct = testProducts.filter(product=>product.id==req.params.id);
    res.send(filteredproduct[0]);
  })

  app.put("/api/products/:id", (req,res) => {
    console.log("[API Call] Edit product info for:", req.params.id);
    console.log("Checking credentials:", req.headers.userid);
    // if userid does not have admin access:
    if (false) res.send({error:"Access denied"});
    console.log("Product info:", req.body);
    res.send({ message:"Product info updated" });
  })

  app.delete("/api/products/:id", (req,res) => {
    console.log("[API Call] Deleting product info for:", req.params.id);
    console.log("Checking credentials:", req.headers.userid);
    // if userid does not have admin access:
    if (false) res.send({error:"Access denied"});
    res.send({ message:"Product successfully deleted" });
  })

  app.get("/api/transactions", (req,res) => {
    console.log("[API Call] Fetching all transactions info");
    res.send(testTrans);
  })

  app.post("/api/transactions", (req,res) => {
    console.log("[API Call] Adding new transaction");
    console.log("Adding transaction:", req.body);
    res.send({ message:"New transaction added" });
  })

  app.put("/api/transactions/:id", (req,res) => {
    console.log("[API Call] Edit existing transaction", req.params.id);
    console.log("New transaction info", req.body);
    res.send({ message:"Transaction successfully edited" });
  })

  // Dangerous API call, should be removed before release
  app.get('/api/users', (req, res) => {
    console.log("[API Call] Fetching all user info");
    res.send(testUsers)
  })

  app.post('api/users', (req, res) => {
    console.log(req.body)
  })
}

module.exports = apiRoutes;