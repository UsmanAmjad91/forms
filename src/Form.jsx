import React from "react";
import { useState } from "react";
import "./Custom.css";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
   
  } from 'mdb-react-ui-kit';
const Forms = () => {
    const [firstname, setfn] = useState();
    const [fname, setfname] = useState();
    const InputFirstName = (event) => {
      setfn(event.target.value);
      }
      const [lastname, setln] = useState();
      const [lname, setlastname] = useState();
      const InputLastName = (event) => {
        setln(event.target.value);
        }

        const [email, setemail] = useState();
        const [emails, setemails] = useState();
        const InputEmail = (event) => {
          setemail(event.target.value);
          }

          const [password, setpassword] = useState();
          const [passwords, setpasswords] = useState();
          const InputPassword = (event) => {
            setpassword(event.target.value);
            }
        const Submit = () => {
          setfname(firstname);
          setlastname(lastname);
          setemails(email);
          setpasswords(password);
        }
    return (
    <>
    <div className="container">
    <form className="mt-5 form">
      <MDBRow className='mb-4 form-group'>
        <MDBCol>
          <label className='mb-1' for="firstname">First name</label>
          <MDBInput type="text" id='form3Example1' name="firstname" onChange={InputFirstName} className="form-control" Value={firstname}/>
        </MDBCol>
        <MDBCol>
          <label className='mb-1' for="lastname">Last name</label>
          <MDBInput type="text" id='form3Example2'name="lastname" onChange={InputLastName} className="form-control" Value={lastname} />
        </MDBCol>
      </MDBRow>
      <div className='form-group col-lg-12'>
     <label className='mb-1' for="email">Email address</label>
      <MDBInput className='mb-4 form-control' type='email' name="email" onChange={InputEmail} id='form3Example3' autoComplete="false" Value={email} />
      </div>
      <div className='form-group col-lg-12'>
      <label className='mb-1' for="password">Password</label>
      <MDBInput className='mb-4 form-control' type='password' name="password" onChange={InputPassword} id='form3Example4' autoComplete="false" Value={password}/>
      </div>
      <div className='form-group col-lg-6'>
      <MDBBtn type='submit' className='mb-4 form-control' onClick={Submit}  block>  Sign in </MDBBtn>
      </div>
      <div className='text-center'>
        <p>
          Not a member? <a href='#!'>Register</a>
        </p>
        
      </div>
    </form>
        <h1>{fname}</h1>
        <h1>{lname}</h1>
        <h1>{emails}</h1>
        <h1>{passwords}</h1>
    </div>
    </>
    );
}

export default Forms;