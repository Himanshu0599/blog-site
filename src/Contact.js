import React, { useState } from "react";

const Contact =()=>{
    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:"",
        msg:""
    })

    const InputEvent=(event)=>{
        const {name , value}=event.target;
        setData((prevVal)=>{
            return{
                ...prevVal,
                [name]:value
            }
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`${data.fullname}`);
    }
    return(
        <>
          <div className="my-5">
             <h1 className="text-center">Contact Us</h1>
          </div>
          <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                  <form onSubmit={formSubmit}>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        name="fullname"
                        value={data.fullname}
                        onChange={InputEvent}
                        placeholder="Enter your Name"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        name="phone"
                        value={data.phone}
                        onChange={InputEvent}
                        placeholder="Mobile Number"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                            Email address
                        </label>
                        <input type="email" 
                        class="form-control" 
                        id="exampleFormControlInput1"
                        name="email"
                        value={data.email}
                        onChange={InputEvent} 
                        placeholder="name@example.com"/>
                        </div>
                       <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">
                            Message 
                       </label>
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        value={data.msg}
                        onChange={InputEvent}
                        ></textarea>
                        </div>
                        <div className="col-12">
                         <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                  </form>
                </div>
            </div>
          </div>
        </>
    )
}

export default Contact;