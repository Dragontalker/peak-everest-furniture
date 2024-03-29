import { useEffect, useState } from 'react';
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';

function Charts(props) {

  const [transData, setTransData] = useState([]);

  useEffect(() => {
    let newData = [];
    props.products.forEach(product => {
      newData.push({ productid:product._id, bought:0, sold:0, cancelled:0 });
    });
    props.trans.forEach(entry => {
      newData.forEach(data => {
        if (data.productid === entry.productId && entry.status === "BOUGHT") data.bought++;
        else if (data.productid === entry.productId && entry.status === "SOLD") data.sold++;
        else if (data.productid === entry.productId && entry.status === "CANCELLED") data.cancelled++;
      })
    })
    setTransData(newData);
  }, [props])

  return(
    <div className="admin-charts">
      <h5 className="card-text">Sales Info</h5>
        <BarChart width={800} height={300} data={transData}>
          <XAxis dataKey="productid" tick={false} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="bought" fill="#8884d8" />
          <Bar dataKey="sold" fill="#82ca9d" />
          <Bar dataKey="cancelled" fill="#ff2525" />
        </BarChart>
    </div>
  )
}

export default Charts;