import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Productsdetails = () => {
  const params = useParams();
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${params.id}`).then((r) => {
      setdata(r.data);
      //   console.log(r.data);
    });
  }, [params.id]);

  return Object.keys(data).length === 0 ? (
    "Product doesnot exist"
  ) : (
    <div>
      {/* {data.map((el)=>{
      return(
          
      )
     
    })} */}

      <table>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>detail</th>
        </tr>

        <tr>
          <td> {data.name} </td>
          <td> {data.price} </td>
          <td>
            {" "}
            <Link to={`/products/${data.id}`}>more details</Link>{" "}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Productsdetails;
