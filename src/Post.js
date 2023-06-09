import React, { useState } from 'react'
const API_BASE_URL='http://localhost:3001/';
function Post({id,text,getItem}) {
  const [newText,setText]=useState(text);
    const update=async()=>{
        // a PUT request:
    const response = await fetch(`${API_BASE_URL}api/posts/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText }),
      });
      getItem();
    }
    const Delete=async()=>{
          // DELETE
    const response = await fetch(API_BASE_URL + `api/posts/${id}`, {
        method: "DELETE",
        mode: "cors",
      });
      getItem();
    }

  return (
    <div>
        <input value={newText} name="text-edit" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={Delete} className='delete'>Delete</button>
        <button onClick={update} className='update'>Update</button>
    </div>
  )
}

export default Post
