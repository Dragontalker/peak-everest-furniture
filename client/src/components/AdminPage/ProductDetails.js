import { useState } from "react";

function ProductDetails(props) {

  const [heading, setHeading] = useState(props.product.heading);
  const [price, setPrice] = useState(props.product.price);
  const [inventory, setInventory] = useState(props.product.quantity);
  const [description, setDescription] = useState(props.product.description);
  const [images, setImages] = useState(props.product.image || []);

  function handleAdd() {
    console.log("Adding this product");
    props.refreshData();
    props.setPopupProduct(null);
  }

  function updateImagesArr(e, idx) {
    let newArr = images;
    newArr[idx] = e.target.value;
    setImages([...newArr]);
  }

  function handleUpdate() {
    console.log("Updating product", props.product.id);
    props.refreshData();
    props.setPopupProduct(null);
  }

  function handleDelete() {
    console.log("Deleting product", props.product.id);
    props.refreshData();
    props.setPopupProduct(null);
  }

  return(
    <>
      <div className="product-info-popup">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Product Information</h5>
            <div className="row">
              <div className="col-8 my-auto">
                <label className="form-label">Product Name</label>
                <input type="text" value={heading} onChange={e => setHeading(e.target.value)} className="form-control" />
              </div>
              <div className="col-4">
                <label className="form-label">Price</label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control" />
                <label className="form-label">Inventory</label>
                <input type="number" value={inventory} onChange={e => setInventory(e.target.value)} className="form-control" />
              </div>
              <div className="col-12  mb-2">
                <label className="form-label">Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} 
                  rows={4} className="form-control" ></textarea>
              </div>
              <div className="col-12 mb-2">
                <label className="form-label">Pictures (Requires HTTP URLs)</label>
                <input type="text" value={images[0]} onChange={e => updateImagesArr(e, 0)} className="form-control mb-2" />
                <input type="text" value={images[1]} onChange={e => updateImagesArr(e, 1)} className="form-control mb-2" />
                <input type="text" value={images[2]} onChange={e => updateImagesArr(e, 2)} className="form-control mb-2" />
                <input type="text" value={images[3]} onChange={e => updateImagesArr(e, 3)} className="form-control mb-2" />
              </div>
              <div className="col-12 mb-2 mx-auto">
                {props.product.id ? 
                  <div className="btn-group">
                    <button className="btn btn-dark" onClick={handleUpdate}>Update Product</button>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete Product</button>
                  </div> :
                  <div className="btn-group">
                    <button className="btn btn-dark" onClick={handleAdd}>Add Product</button>
                    <button className="btn btn-danger" onClick={() => props.setPopupProduct(null)}>Cancel</button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info-backdrop" onClick={() => props.setPopupProduct(null)}></div>
    </>
  )
}

export default ProductDetails;