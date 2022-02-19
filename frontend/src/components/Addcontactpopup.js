import axios from "axios";
import React, { useEffect, useState } from "react";

const Addcontactpopup = ({ title,setData }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [photo, setPhoto] = useState("");
  const [clicked, setClicked] = useState(0);

 

  const handleAdd = async (e) => {
    try {
      e.preventdefault();
      const respose = await axios.post("http://localhost:5000/api/", {firstname,lastname,email,mobile,photo},
      { headers: {'Content-Type': 'application/json' }});
      alert(respose.data);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhoto("");
      setClicked(clicked + 1);
      console.log("clicked");
    } catch (error) {
      console.log(error);
    }
  };
  const fetchdata=async()=>{
    const respose = await axios.get("http://localhost:5000/api/");
    setData(respose.data);
  }
  useEffect(() => {
    fetchdata();  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked])

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAdd}>             
                  <div className="col-sm-10 my-2 ">
                    <input
                      type="text"
                      className="form-control w-60 "
                      value={firstname}
                      placeholder="FirstName"
                      required={true}
                      onChange={(e) => setFirstname(e.target.value)}
                    />                  
                </div>                  
                  <div className="col-sm-10 mb-2">
                    <input
                      type="text"
                      className="form-control w-60"
                      value={lastname}
                      placeholder="LastName"
                      required={true}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                  <div className="col-sm-10 mb-2">
                    <input
                      type="email"
                      className="form-control w-60"
                      value={email}
                      placeholder="Email"
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-sm-10 mb-2">
                    <input
                      type="text"
                      className="form-control w-60"
                      value={mobile}
                      placeholder="Mobile No."
                      required={true}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                  <div className="col-sm-10 mb-2">
                    <input
                      type="text"
                      className="form-control w-60"
                      value={photo}
                      placeholder="Photo URL"
                      onChange={(e) => setPhoto(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
              </form>
            </div>           
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcontactpopup;
