import { render } from '@testing-library/react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useEffect, useState } from "react";
import { boolean } from 'yup/lib/locale';
import { Redirect } from "react-dom"

import * as Yup from 'yup'

// import  UserData  from './api';
import Loading from "./loading";
import NotFound from './notFound';
import Success from './Success';
import ServerLoader from './serverLoader';
// 


const Formic = () => {
  const [sub, setSub] = useState(false);
  const [submit, handleSubmit] = useState(true);
  const [error, errorHandler ] = useState(false);
  const [server, serverHandler] = useState(false);


    return(
<div> 
  { server == true && <Success/>}
  { error == true && <NotFound/>}
  {(server == false && submit == false) && <ServerLoader/>}
   {(server ==false && submit == true ) &&
      <Formik
      initialValues={{
        fullName: "",
        gender: "",
        email: "",
        address: "",
        phone: "",
        whatsApp: "",
        alIndex: "",
        uniType: "",
        time: "",
        platform: "",
        pythonKnowledge: "",
      }}

      validationSchema={Yup.object({
        fullName: Yup.string()
          .max(255, 'Must be 15 characters or less')
          .required("Required"),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        address: Yup.string()
          .max(255, "Must be 15 characters or less")
          .required(),
        phone: Yup.string()
          .min(10, "Invalid number")
          .max(10, 'Must be exactly 10 digits')
          .required("This field is requried"),
        whatsApp: Yup.string()
          .min(10, "Invalid number")
          .max(10, 'Must be exactly 10 digits')
          .required("This field is requried"),
        alIndex: Yup.string()
          .max(12, "invalid A/L Index No")
          .required("This field is requried")
        // validation tika methana kara gain mama firest eke withrai karala thiyanne
      })}
      onSubmit={ async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        // console.log(values)
        // alert(JSON.stringify(values, null, 2));
        setSub(true)
        handleSubmit(false);
        const response = await fetch(
          `https://hackdozeapi.azurewebsites.net/api-hackdoze-eies/users`,
              //  `http://localhost:3000/api/v1/quiz/questions`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify(values, null, 2)
          
          },
        ); 
        if(response.ok == false) {
          errorHandler(true)
          console.log(data)
        }
        const data = await response.json();
        handleSubmit(true)
        serverHandler(true);
        console.log("data",data)
        
      
        // console.log()
        // // if(data.fullName !="oshan") {
        // // 
   
        // // } else {
        // //   alert(data.fullName);
         
        // // }
       
      }
      }

    >

      <div className="d-lg-flex half">
        <div
          className="bg order-1 order-md-2 half-2"
          style={{ backgroundImage: `url(/hackdoze01/hackdoze/Bubble-Background.svg)` }}
          // style={{ backgroundImage: `url(/bg_1.jpg)` }}
        ></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 py-5">
                <h3 className="text-center mb-5" style={{fontSize:"45px", color:"rgb(252, 72, 72)"}}>HackDoze Registration</h3>             
                <Form>
                  <div class="row">
                    <div class="form-group mb-3">
                      <label htmlFor="fullName">Name with Initials</label>
                      <Field
                        id="fullName"
                        name="fullName"
                        placeholder="W.Jane Doe"
                        class="form-control "
                      />
                      {/* error msg display */}
                    
                  
                      <div className="text-danger small">
                        <ErrorMessage name="fullName" />
                      </div>
                      
                    </div>
                    <div class="col-lg-12 mb-3">
                      <div id="gender-group">Gender</div>
                      <div
                        role="group"
                        aria-labelledby="gender-group"
                        className="form-group"
                      >
                        <Field
                          type="radio"
                          name="gender"
                          value="male"
                          id="male"
                          className="form-check-input"
                        />
                        <label class="form-check-label ms-1" for="male">
                          Male
                        </label>
                        <Field
                          type="radio"
                          name="gender"
                          value="female"
                          id="female"
                          className="form-check-input ms-3"
                        />
                        <label class="form-check-label  ms-1" for="female">
                          Female
                        </label>
                      </div>
                      <div className="text-danger small">
                        <ErrorMessage name="gender" />
                      </div>

                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <div class="form-group  '">
                        <label htmlFor="email">Email</label>
                        <Field
                          id="email"
                          name="email"
                          placeholder="jane@acme.com"
                          type="email"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div className="text-danger small">
                        <ErrorMessage name="Email" />
                      </div>
                  </div>
                  <div class="form-group mb-3">
                    <label htmlFor="address">Permanent Address</label>
                    <Field
                      id="address"
                      name="address"
                      placeholder="Address... "
                      class="form-control"
                    />
                      <div className="text-danger small">
                        <ErrorMessage name="address" />
                      </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div class="form-group first">
                        <label htmlFor="phone">Phone</label>
                        <Field
                          id="phone"
                          name="phone"
                          placeholder="0770000000"
                          type={"text"}
                          class="form-control"
                        />
                      </div>
                      <div className="text-danger small">
                        <ErrorMessage name="phone" />
                      </div>
                    </div>
                    <div class="form-group col-lg-6 mb-3">
                      <label htmlFor="whatsApp">WhatsApp Number</label>
                      <Field
                        id="whatsApp"
                        name="whatsApp"
                        placeholder="0770000000"
                        type={"text"}
                        class="form-control"
                      />
                        <div className="text-danger small">
                        <ErrorMessage name="whatsApp" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group last mb-3">
                        <label htmlFor="alIndex">A/L index number</label>
                        <Field
                          id="alIndex"
                          name="alIndex"
                          placeholder="0770000000"
                          type="text"
                          class="form-control"
                        />
                      </div>
                      <div className="text-danger small">
                        <ErrorMessage name="alIndex" />
                      </div>
                    </div>
                    <div class="form-group  col-lg-6 mb-3">
                      <label htmlFor="university">University Type</label>
                      <Field
                        name="uniType"
                        as="select"
                        id="university"
                        class="form-control"
                      >
                        <option selected>Select...</option>
                        <option value="private">Private</option>
                        <option value="government">Government</option>
                        <option value="other">Other</option>
                      </Field>
                    </div>
                  </div>

                  <div className="row">
                    <div class="form-group col-lg-6 mb-3">
                      <label htmlFor="time">Time</label>
                      <Field
                        name="time"
                        as="select"
                        id="time"
                        class="form-control"
                      >
                        <option selected>Prefered Time For Workshops</option>
                        <option value="time1">8-11 a.m</option>
                        <option value="time2">4-7 p.m</option>
                        <option value="time3">7-10 p.m</option>
                      </Field>
                    </div>

                    <div class="form-group col-lg-6 mb-3">
                      <label htmlFor="platform">Platform</label>
                      <Field
                        name="platform"
                        as="select"
                        id="platform"
                        class="form-control"
                      >
                        <option selected>Select...</option>
                        <option value="zoom">zoom</option>
                        <option value="fb-live">fb live</option>
                      </Field>
                    </div>
                  </div>

                  <div class="form-group">
                    <label htmlFor="pythonKnowledge">
                      Do u have prior knowledge on python
                    </label>
                    <Field
                      id="pythonKnowledge"
                      name="pythonKnowledge"
                      placeholder="Type here..."
                      class="form-control"
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit"
                     disabled = {submit == false}
                     className="btn btn-warning mt-4">
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

     </Formik>
    }
     {/* {submit == false && <Loading/>} */}

 
  </div>
    );
    
}

export default Formic;