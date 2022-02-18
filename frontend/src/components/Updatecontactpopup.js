import React, { useState } from 'react'

const Updatecontactpopup = ({title}) => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [photo, setPhoto] = useState();
    console.log(firstname , " " ,lastname , " " ,email)
    
  return (
    <>
    <div
          class="modal fade"
          id="updateModel"
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
                <form>
                  <div class="row mb-3 ">
                    <label class="col-sm-2 col-form-label ">
                      Firstname
                    </label>
                    <div class="col-sm-10 ">
                      <input
                        type="text"
                        class="form-control w-50 "
                        value={firstname}
                        onChange={(e)=>setFirstname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label
                      class="col-sm-2 col-form-label p-12"
                    >
                      Lastname
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control w-50"
                        value={lastname}
                        onChange={(e)=>setLastname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label p-12" >
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control w-50"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label
                      class="col-sm-2 col-form-label p-12"
                    >
                      Photo
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control w-50"
                        value={photo}
                        onChange={(e)=>setPhoto(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">                 
                <button type="button" class="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          </div>
          </div>

</>
  )
}

export default Updatecontactpopup