const { v4: uuidv4 } = require('uuid');
const db = require("../db/models");

const testProducts = require("../db/seed.json");
const testTrans = require("../db/transactionsSeed.json");

function apiRoutes(app, onlineUsers) {
  /* -------------------- */
  /* -- PRODUCT ROUTES -- */
  /* -------------------- */
  app.get("/api/products", async (req,res) => {
    console.log("[API Call] Fetching all product info");
    const data = await db.products.find({});
    res.send(data);
  })

  app.post("/api/products", async (req,res) => {
    console.log("[API Call] Post new product info");
    console.log("Checking credentials:", req.headers.sessionid);
    if (onlineUsers[req.headers.sessionId].isAdmin) {
      await new db.products(body).save();
      res.send({ success:"Added new product" });
    }
    // if session does not have admin access
    else res.send({error:"Access denied"});
  })

  app.get("/api/products/:id", async (req,res) => {
    console.log("[API Call] Fetching product info for id", req.params.id);
    const filteredproduct = await db.products.findById(req.params.id);
    if (!filteredproduct) res.send({ error:"Product not found" });
    res.send(filteredproduct);
  })

  app.put("/api/products/:id", (req,res) => {
    console.log("[API Call] Edit product info for:", req.params.id);
    console.log("Checking credentials:", req.headers.sessionid);
    if (onlineUsers[req.headers.sessionId].isAdmin) res.send({ success:"Product info updated" });
    // if session does not have admin access
    else res.send({error:"Access denied"});
  })

  app.delete("/api/products/:id", (req,res) => {
    console.log("[API Call] Deleting product info for:", req.params.id);
    console.log("Checking credentials:", req.headers.sessionid);
    if (onlineUsers[req.headers.sessionId].isAdmin) res.send({ success:"Product successfully deleted" });
    // if session does not have admin access
    else res.send({error:"Access denied"});
  })
  /* ------------------------ */
  /* -- TRANSACTION ROUTES -- */
  /* ------------------------ */
  app.get("/api/transactions", (req,res) => {
    console.log("[API Call] Fetching all transactions info");
    console.log("Checking credentials:", req.headers.sessionid);
    if (!onlineUsers[req.headers.sessionid]) res.send({error:"User not found"});
    else if (onlineUsers[req.headers.sessionid].isAdmin) res.send(testTrans);
    // if session does not have admin access
    else res.send({error:"Access denied"});
  })

  app.post("/api/transactions", (req,res) => {
    console.log("[API Call] Adding new transaction");
    console.log("Adding transaction:", req.body);
    res.send({ success:"New transaction added" });
  })

  app.put("/api/transactions/:id", (req,res) => {
    console.log("[API Call] Edit existing transaction", req.params.id);
    console.log("New transaction info", req.body);
    res.send({ success:"Transaction successfully edited" });
  })
  /* ----------------- */
  /* -- USER ROUTES -- */
  /* ----------------- */
  app.post('/api/users', async (req, res) => {
    console.log("[API Call] Adding new user info");
    console.log(req.body);
    // check if email is already in DB
    let check = await db.users.findOne({ email: req.body.email });
    if (check) res.send({ error:"Email already exists", emailAlreadyExists:true });
    else {
      await new db.users(req.body).save();
      res.send({ success:"Successfully added new user"});
    }
  })

  app.get('/api/users/:id', (req,res) => {
    console.log("[API Call] Getting user info for session", req.params.id);
    const data = onlineUsers[req.params.id];
    if (data) res.send(data);
    else res.send({ error:"Session not found" });
  })

  app.post('/api/login', async (req,res) => {
    console.log("[API Call] Login request");
    // query db for user with same email
    console.log(req.body);
    // if email doesn't exist
    const user = await db.users.findOne({ email: req.body.email });
    if (!user) res.send({ error:"Account not found" });
    // if pw don't match
    else if (user.password !== req.body.password) res.send({ error:"Incorrect password" });
    // add new session key to onlineUsers
    else {
      const newID = uuidv4();
      onlineUsers[newID] = user;
      res.send({ success:"Successfully logged in", sessionId:newID });
      console.log(onlineUsers);
    }
  })

  app.get('/api/logout/:id', (req,res) => {
    console.log("[API Call] Logout request from", req.params.id);
    delete onlineUsers[req.params.id];
    console.log(onlineUsers);
    res.send({ success:"Successfully logged out"});
  })
}

module.exports = apiRoutes;