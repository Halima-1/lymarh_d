import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from "@emailjs/browser";
import "../styles/form.scss";
function Form() {
    const [newMessage,setNewMessage] =useState({
        email:"",
        name:"",
        message:""
    })
    const [errData, setErrData] = useState({});
    const form = useRef();
    const newErr={}
    
    const handleChange = (e) => {
        const value = e.target.value;
        setNewMessage({ ...newMessage, [e.target.name]: value }) 
     };

     // form validation
const handleValidation =()=>{
    if(newMessage.email ==''){
        newErr.name ="kindly input your email address"
    }
    else if(newMessage.name == ''){
        newErr.email ="kindly input your name"
    }
    else if(newMessage.message == ''){
        newErr.message ="kindly input your message"
    }
    setErrData(newErr);
    // users.push(newUser) 

}
const submit =()=>{
    handleValidation ()
    if(!errData){
        return;
    }
    emailjs
    .sendForm(
      "service_5pxa3vh",   // from EmailJS dashboard
      "template_5vnrqzb",  // from EmailJS dashboard
      form.current,
      "h71E_TPgzzVw2_ker"    // from EmailJS dashboard
    )
    .then(
      (result) => {
        console.log(result);
        alert("Message sent successfully! ✅");
      },
      (error) => {
        console.log(error);
        alert("Failed to send message ❌");
      }
    );
// };
}

    return (
        <>
         <section className="form" id="contact">
        <h2>Have a project ? Let's talk!</h2>
        <form id="contact-form" ref={form} action=""
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}>
    <div>
        {errData.email && <span>{errData.email}</span>}
    <label htmlFor="name">Name</label>
    <input type="text" required name="name"onChange={handleChange} value={newMessage.name}   />
    </div>
    <div>
    {errData.name && <span>{errData.name}</span>}
    <label htmlFor="email">Email</label>
    <input type="email" name="email"onChange={handleChange} value={newMessage.email}  />
    </div>
    <div>
    {errData.message && <span>{errData.message}</span>}
    <label htmlFor="message">Message</label>
    <textarea name="message"onChange={handleChange} value={newMessage.message} id="" cols="10" rows="3"></textarea>
    </div>
    <input type="submit" onClick={submit} className="btn" value={"Send message"} />
</form>
      </section>
        </>
    )
}

export default Form
