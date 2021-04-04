import { useEffect, useState } from "react";

function TransactionsList(props) {

  const [trans, setTrans] = useState([]);

  useEffect(() => {
    // remove transactions that are marked BUYING, SOLD, or CANCELLED
    let transData = props.trans.filter(entry => entry.status === "BOUGHT");
    setTrans(transData);
  },[props])

  async function transSold(id) {
    console.log("set transaction with id " + id + " to status SOLD");
    // update status of transaction to SOLD
    const res = await fetch(`/api/transactions/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json', 'userid': '123' },
      body: JSON.stringify({ status:"SOLD" })
    });
    console.log(res);
    props.refreshData();
  }

  return(
    <div className="admin-trans-list table-responsive">
      <h5>Ongoing Transactions</h5>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Time of sale</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {trans.map(entry => 
            <tr key={entry._id}>
              <td>{entry._id}</td>
              <td>{entry.userId}</td>
              <th>{entry.productName}</th>
              <td>{new Date(entry.updatedAt).toLocaleDateString()} {new Date(entry.updatedAt).toLocaleTimeString()}</td>
              <td className="text-end">
                <button className="btn btn-sm btn-outline-dark" onClick={() => transSold(entry._id)}>
                  Delivery Sent
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionsList;