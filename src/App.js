import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post.js";
const API_BASE_URL='http://localhost:3001/';


function App() {
const [data,setData]=useState([]);
const [sendData,setSendData]=useState("");

const getItem=async()=>{
// a GET request:

const response = await fetch(API_BASE_URL + "api/posts", {
  method: "GET",
  mode: "cors",
  headers: {
  "Content-Type": "application/json",
  },
});
setData(await response.json()) // will give you the json response from this request
}
useEffect(()=>{
  getItem()
},[]);
const postData=async()=>{
// a POST request:
const response = await fetch(API_BASE_URL + "api/posts", {
  method: "POST",
  mode: "cors",
  headers: {
  "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: sendData }),
});
await response.json();// will give you the json response from this request
}

const handleSubmit=(e)=>{
  e.preventDefault();
  const value=e.target[0].value;
  setSendData(value);
  postData()
  getItem()
}

console.log(data)

  return (
  <div className="main-content">
<h1>Server Application</h1>
<form onSubmit={handleSubmit}>
<input name="notes" onChange={(e)=>setSendData(e.target.value)}/>
<button className="save">Save</button>
</form>
<ul>

  {

    data.map( data=>(

    <li key={data.id}><Post id={data.id} text={data.text} getItem={getItem}/></li>
    ))
  }
</ul>


  </div>
  )
}

export default App;
