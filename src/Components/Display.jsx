import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Adddata from "./Adddata";
import DataEdit from "./DataEdit";

const Display = () => {
    const [update,setUpdate]=useState(false);
    const [myData, setMyData] = useState([]);
    const[isError, setIsError] =useState("");
    const[getId,setGetId]= useState('');
    useEffect(() => {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then((Response) => setMyData(Response.data.data))
        .catch((error) => setIsError(error.message));
    }, []);
    return (
      <div>
        {!isError !== "" && <h2>{isError}</h2>}

      {!update && <Adddata/>}
      {update && <DataEdit id={getId}/>}

        <div className="grid grid-cols-3 justify-center content-center gap-8">
          {myData.map((post) => {
            const { id, email, first_name, last_name, avatar } = post;
            return (
              <div className="grid">
              <div
                key={id}
                className="m-4 grid grid-cols-2 grid-rows-2 justify-center border border-slate-400 rounded-md"
              >
                <div className="row-span-2">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="grid justify-start content-center">
                  <div className="text-lg font-semibold">
                    {first_name} {last_name}{" "}
                  </div>
                  <div className="text-slate-600"> {email}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 h-12 m-4 ">
              <div className="bg-red-900 border border-red-900 rounded-md text-white  grid  justify-center font-semibold m-2" onClick={()=>alert('Do you want to delete')}>Delete</div>
              <div className="bg-cyan-800 border border-cyan-800 rounded-md text-white grid  justify-center font-semibold m-2" onClick={()=>{setUpdate(true); setGetId(post.id)}}>Edit</div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Display
