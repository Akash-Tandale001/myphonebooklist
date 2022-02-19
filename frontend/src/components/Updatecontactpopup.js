import React, { useState } from "react";

const Updatecontactpopup = ({ title }) => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [photo, setPhoto] = useState();
  // console.log(firstname, " ", lastname, " ", email);

  return (
    <>
      <div
        className="modal fade"
        id="updateModel"
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
              <form>
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

export default Updatecontactpopup;
