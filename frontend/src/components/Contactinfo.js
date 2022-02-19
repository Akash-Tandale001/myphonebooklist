import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import Updatecontactpopup from "./Updatecontactpopup";

const Contactinfo = ({id, firstname, lastname, email, photo, mobile,setData }) => {

  const [clicked, setClicked] = useState(0);
  

  const fetchdata=async()=>{
    const respose = await axios.get("http://localhost:5000/api/");
    setData(respose.data);
  }
  console.log(id)
  useEffect(() => {
    fetchdata(); // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [clicked])

  const handleDelete= async()=>{
    const respose = await axios.delete(`http://localhost:5000/api/${id}`)
    setClicked(clicked+1)
    alert(respose.data)    
  }
 
  
  return (
    <>
      <div className="contact">
        <img src={photo} alt="..." />
        <div className="info">
          <p>
            Name : {firstname} {lastname}
          </p>
          <p> Email : {email}</p>
          <p>Contact info : {mobile}</p>
        </div>
        <div className="btn-section">
          <button  className="btn "
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#updateModel">
            <i className="fa-solid fa-pen-to-square"></i>Edit
          </button>
          <Updatecontactpopup title={`Update Contact of ${firstname} ${lastname}`} />
          <button 
          className="btn"
            onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Contactinfo;
