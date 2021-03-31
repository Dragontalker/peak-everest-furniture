
const testProductsDB = [
  {id:"abc", name:"test prod1", desc:"test description 1", image:"", price:79.99},
  {id:"def", name:"test prod2", desc:"test description 2", image:"", price:129.99},
  {id:"grh", name:"test prod3", desc:"test description 3", image:"", price:39.99},
  {id:"erg", name:"test prod4", desc:"test description 4", image:"", price:129.99},
  {id:"yuh", name:"test prod5", desc:"test description 5", image:"", price:89.99},
  {id:"rtg", name:"test prod6", desc:"test description 6", image:"", price:59.99}
]

function apiRoutes(app) {

  app.get("/api/products", (req,res) => {
    console.log("[API Call] Fetching all product info");
    res.send(testProductsDB);
  })

  app.get("/api/products/:id", (req,res) => {
    console.log("[API Call] Fetching product info for id", req.params.id);
    //...
    res.send({});
  })

}

module.exports = apiRoutes;