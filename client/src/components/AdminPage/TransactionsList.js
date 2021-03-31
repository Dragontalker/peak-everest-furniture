// import { useEffect, useState } from "react";

function TransactionsList(props) {

  return(
    <div className="admin-trans-list table-responsive">
      <h4>Ongoing Transactions</h4>
      <table className="table table-sm">
        <thead>
            <tr>
              <th scope="col">transaction ID</th>
              <th scope="col">User ID</th>
              <th scope="col">Product ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Time of sale</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123</td>
              <td>asdjklebnkl</td>
              <td>1203-2344</td>
              <th>Graco SnugRide</th>
              <td>Mar 30, 2021 10:45:23</td>
              <td className="text-end"><button className="btn btn-sm btn-outline-dark">Sold/Delivered</button></td>
            </tr>
          </tbody>
      </table>
    </div>
  )
}

export default TransactionsList;