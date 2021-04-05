const { v4: uuidv4 } = require('uuid');
const db = require("../db/models");

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
    const checkUser = {...onlineUsers[req.headers.sessionid]}._doc;
    if (checkUser.isAdmin) {
      await new db.products(req.body).save();
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

  app.put("/api/products/:id", async (req,res) => {
    console.log("[API Call] Edit product info for:", req.params.id);
    console.log("Checking credentials:", req.headers.sessionid);
    const checkUser = {...onlineUsers[req.headers.sessionid]}._doc;
    if (checkUser.isAdmin) {
      await db.products.updateOne({_id:req.params.id}, req.body);
      res.send({ success:"Product info updated" });
    }
    // if session does not have admin access
    else res.send({error:"Access denied"});
  })

  app.delete("/api/products/:id", async (req,res) => {
    console.log("[API Call] Deleting product info for:", req.params.id);
    console.log("Checking credentials:", req.headers.sessionid);
    const checkUser = {...onlineUsers[req.headers.sessionid]}._doc;
    if (checkUser.isAdmin) {
      await db.products.deleteOne({ _id:req.params.id });
      res.send({ success:"Product successfully deleted" });
    }
    // if session does not have admin access
    else res.send({error:"Access denied"});
  })
  /* ------------------------ */
  /* -- TRANSACTION ROUTES -- */
  /* ------------------------ */
  app.get("/api/transactions", async (req,res) => {
    console.log("[API Call] Fetching all transactions info");
    console.log("Checking credentials:", req.headers.sessionid);
    const checkUser = {...onlineUsers[req.headers.sessionid]}._doc;
    if (checkUser.isAdmin) {
      const data = await db.transactions.find({});
      res.send(data);
    }
    // if session does not have admin access
    else res.send({error:"Access denied"});
  })

  app.post("/api/transactions", async (req,res) => {
    console.log("[API Call] Adding new transaction");
    // find userID from userSession
    if (onlineUsers[req.body.userSession]) {
      const userId = onlineUsers[req.body.userSession]._id;
      // add ALL products in cart to new transaction
      // await new db.transactions({
      //   userId:userId, 
      //   productId:req.body.productId, 
      //   productName:req.body.productName, 
      //   status:req.body.status
      // }).save();
      res.send({ success:"New transactions added" });
    }
    else res.send({ error:"Session not found" });
  })

  app.put("/api/transactions/:id", async (req,res) => {
    console.log("[API Call] Edit existing transaction", req.params.id);
    await db.transactions.updateOne({_id:req.params.id}, req.body);
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

  app.put('/api/users/:id', async (req,res) => {
    console.log("[API Call] Updating cart for session", req.params.id);
    const user = onlineUsers[req.params.id];
    if (user) {
      if (req.body.status === "BUYING") {
        console.log("Add product to cart", req.body);
        // add one product to cart
        const newItem = { 
          productId: req.body.productId,
          heading: req.body.heading,
          price: req.body.price
        };
        await db.users.updateOne({_id:user._id}, { $push: {cart:newItem} });
        // replace user info in onlineUsers with updated version
        onlineUsers[req.params.id] = await db.users.findOne({_id:user._id});
        console.log("new cart:", onlineUsers);
      }
      if (req.body.status === "CANCEL") {
        console.log("Remove one product from cart", req.body);
        // create new cart with item removed
        const newCart = user.cart.filter(item => item._id !== req.body.cartId );
        await db.users.updateOne({_id:user._id}, { cart:newCart });
        // replace user info in onlineUsers with updated version
        onlineUsers[req.params.id] = await db.users.findOne({_id:user._id});
        console.log("new cart:", onlineUsers[req.params.id].cart);
      }
      if (req.body.status === "CHECKOUT") {
        // make new transaction entries for each product
        console.log("Remove all products from cart", req.body);
        // remove all products from cart
        await db.users.updateOne({_id:user._id}, { cart:[] });
        // replace user info in onlineUsers with updated version
        onlineUsers[req.params.id] = await db.users.findOne({_id:user._id});
      }
      res.send({ success:"Successfully updated cart" });
    }
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