import axios from 'axios';
import React,{useState} from 'react'


const Adddata = () => {
    
      const [first_name, setFirstName]=useState('');
      const [last_name, setLastName]=useState('');
      const [email, setEmail]=useState('');

      const handelSubmit=(event)=>{
        axios.post('https://reqres.in/api/users',{first_name,last_name,email})
        
      }
  return (
    <div className="grid">
        <form>
          <div className="grid justify-center content-center ">
            <div className=" bg-slate-800 m-12 p-6 rounded-md">
              <div className="m-4 text-white">
                <label htmlFor="firstName" >First Name </label>
                <br></br>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} name="first_name"  className="border border-cyan-200 bg-slate-200 rounded-md text-black w-96 h-10"/>
              </div>
              <div className="m-4 text-white">
                <label htmlFor="lastname">Last Name</label>
                <br></br>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} name="last_name" className="border border-cyan-200 bg-slate-200 rounded-md text-black w-96 h-10"/>
              </div>
              <div className="m-4 text-white">
                <label htmlFor="email">Email</label>
                <br></br>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email"  className="border border-cyan-200 bg-slate-200 rounded-md text-black w-96 h-10"/>
              </div>
              <div className="m-4 text-white grid justify-center">
                <button className=" bg-cyan-200 border border-cyan-200 text-black rounded-md p-2" onClick={handelSubmit}>Add</button>
              </div>
            </div>
          </div>
        </form>
      </div>
  )
}

export default Adddata
