import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
import Contactinfo from "./components/Contactinfo";
import axios from "axios";
import "./App.css";
import image from "./image/contact.png";
import Addcontactpopup from "./components/Addcontactpopup";

function App() {
  const [name, setName] = useState();
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const respose = await axios.get("http://localhost:5000/api/");
    setData(respose.data);
  };
  console.log(data);
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <input
          className="searchbox"
          type="text"
          value={name}
          placeholder="Search Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <div className="btn-section">
          <button className="btn">
            <i className="fa-solid fa-magnifying-glass "></i>Search
          </button>
          <button
            className="btn "
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-user-plus"></i>Add
          </button>          
            <Addcontactpopup title="Add Contact" setData={setData} />          
        </div>
        <div className="count">Total Contact : {data.length}</div>
        <div className="contactSection">
          {data.map((value) => {
            return (
              <Contactinfo
                key={value.id}
                firstname={value.firstname}
                lastname={value.lastname}
                email={value.email}
                photo={value.photo || image}
                mobile={value.mobile}
                setData={setData}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
