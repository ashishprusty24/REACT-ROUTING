import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link}  from 'react-router-dom'
const Products = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
   axios.get("http://localhost:8080/products")
   .then((r)=>{
    setdata(r.data)
    console.log(r.data)
   })
    },[])

    console.log(data)
  return (
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

     {data.map((el)=>{
        return(
            <tr>
            <td> {el.name} </td>
            <td> {el.price} </td>
            <td> <Link to={`/products/${el.id}`}>more details</Link> </td>
        </tr>
        )
       
      })}


      </table>
    </div>
  )
}

export default Products