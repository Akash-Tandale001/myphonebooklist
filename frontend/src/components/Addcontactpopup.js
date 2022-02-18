import axios from "axios";
import React, { useEffect, useState } from "react";

const Addcontactpopup = ({ title,setData }) => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [photo, setPhoto] = useState("");
  console.log(firstname, " ", lastname, " ", email);
  const [clicked, setClicked] = useState(0);

  const handleAdd = async (e) => {
    e.preventdefault();
    const respose = await axios.post("http://localhost:5000/api/", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      photo: photo,
    });
    alert(respose.data);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhoto("");
    setClicked(clicked + 1);
    console.log("clicked");
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
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleAdd}>
                <div class="row mb-3 ">
                  <label class="col-sm-2 col-form-label ">Firstname</label>
                  <div class="col-sm-10 ">
                    <input
                      type="text"
                      class="form-control w-50 "
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-3 formcontent">
                  <label class="col-sm-2 col-form-label p-12">Lastname</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control w-50"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label htmlFor="inputEmail3" class="col-sm-2 col-form-label p-12">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control w-50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label p-12">Photo</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control w-50"
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                    />
                  </div>
                </div>
                <input type="submit" class="btn btn-primary" value="Submit"/>
              </form>
            </div>
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-primary"
                
              >Submit
              </button> */}
                {/* <input type="submit" class="btn btn-primary" value="Submit"/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcontactpopup;
