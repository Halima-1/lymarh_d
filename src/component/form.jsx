import React from 'react'
import { useState } from 'react'
import "../styles/form.scss";
function Form() {
    const [newMessage,setNewMessage] =useState({
        email:"",
        name:"",
        message:""
    })
    const [errData, setErrData] = useState({});
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
    users.push(newUser) 

}
}
const submit =()=>{
    handleValidation ()
    if(!errData){
        return;
    }
    return (
        <>
        <form id='contact' action=""
        onSubmit={(event) => {
          event.preventDefault();
          nextBtn();
        }}>
   <h2>
    Stay up to date on your Industry .
</h2>
    <div>
        {errData.email && <span>{errData.email}</span>}
    <label htmlFor="email">Email or phone</label>
    <input type="email" required name="email"onChange={handleChange} value={newMessage.email} placeholder='email or phone number'  />
    </div>
    <div>
    {errData.name && <span>{errData.name}</span>}
    <label htmlFor="password">password</label>
    <input type="text" name="name"onChange={handleChange} value={newMessage.name} placeholder='Your name' />
    </div>
    <div>
    {errData.message && <span>{errData.message}</span>}
    <label htmlFor="message">Message</label>
    <textarea name="message"onChange={handleChange} value={newMessage.message} placeholder='Your  message here'id="" cols="30" rows="10"></textarea>
    </div>
    <input type="submit" onClick={nextBtn} className="btn" value={"Send message"} />
</form>
        </>
    )
}

export default Form
