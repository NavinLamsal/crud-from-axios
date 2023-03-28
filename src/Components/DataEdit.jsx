import React, { useEffect, useState } from "react";
import axios from "axios";

const DataEdit = (id) => {
 
  const [newData, setNewData]=useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((Response) => setNewData(Response.data.data));
  },[]);

  const changeHandler = (event) => {
    setNewData({...newData, [event.target.name]:event.target.value})
  };
  const handelSubmit = (event )=>{
    event.prevent.default()
    axios.put(`https://reqres.in/api/users?page=2/+{id}`,{newData})
    .then(Response => console.log(Response.data))
    .catch(error =>console.log(error))

    setNewData({
        first_name: "",
        last_name: "",
        email: "",
    })

  };
  return (
    <div>
      <div className="grid">
        <form onSubmit={handelSubmit}>
          <div className="grid justify-center content-center ">
            <div className=" bg-slate-800 m-12 p-6 rounded-md">
              <div className="m-4 text-white">
                <label htmlFor="firstName" >First Name </label>
                <br></br>
                <input type="text" onChange={changeHandler} name="first_name" value={newData.first_name} className="border border-cyan-200 bg-slate-200 rounded-md text-black w-96 h-10"/>
              </div>
              <div className="m-4 text-white">
                <label htmlFor="lastname">Last Name</label>
                <br></br>
                <input type="text" onChange={changeHandler} name="last_name" value={newData.last_name}className="border border-cyan-200 bg-slate-200 rounded-md text-black w-96 h-10"/>
              </div>
              <div className="m-4 text-white">
                <label htmlFor="email">Email</label>
                <br></br>
                <input type="email" onChange={changeHandler} name="email" value={newData.email} className="border border-cyan-200 bg-slate-200 rounded-md text-black w-96 h-10"/>
              </div>
              <div className="m-4 text-white grid justify-center">
                <button className=" bg-cyan-200 border border-cyan-200 text-black rounded-md p-2">Update</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataEdit;
