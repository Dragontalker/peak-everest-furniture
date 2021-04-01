import { useEffect, useState } from "react";

function TransactionsList(props) {

  const [trans, setTrans] = useState([]);

  useEffect(() => {
    // remove transactions that are marked BUYING
    let transData = props.trans.filter(entry => entry.status === "BOUGHT");
    // extend trans with product data
    transData.forEach(entry => {
      props.products.forEach(product => {
        if (product.id === entry.productid) entry.productname = product.heading;
      })
    });
    setTrans(transData);
  },[props])

  return(
    <div className="admin-trans-list table-responsive">
      <h5>Ongoing Transactions</h5>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Time of sale</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {trans.map(entry => 
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.userid}</td>
              <td>{entry.productid}</td>
              <th>{entry.productname}</th>
              <td>{new Date(entry.timestamp).toLocaleDateString()} {new Date(entry.timestamp).toLocaleTimeString()}</td>
              <td className="text-end"><button className="btn btn-sm btn-outline-dark">Delivered</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionsList;