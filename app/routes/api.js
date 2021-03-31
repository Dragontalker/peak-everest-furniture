
const testProducts = require("../db/seed.json");

function apiRoutes(app) {

  app.get("/api/products", (req,res) => {
    console.log("[API Call] Fetching all product info");
    res.send(testProducts);
  })

  app.get("/api/products/:id", (req,res) => {
    console.log("[API Call] Fetching product info for id", req.params.id);
    //...
    const filteredproduct= testProducts.filter(product=>product.id==req.params.id)
  
    res.send(filteredproduct[0]);
  })

}

module.exports = apiRoutes;