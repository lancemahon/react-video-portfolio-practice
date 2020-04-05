import React, { useState } from 'react'
import axios from 'axios'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'

function ContactMeForm () {
  const [isVerified, setIsVerified] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (isVerified) {
      sendEmail()
    }
  }

  function sendEmail() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    axios({
        method: "POST", 
        url:"http://localhost:3001/send", 
        data: {
            name: name,   
            email: email,  
            messsage: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            document.getElementById('contact-form').reset()
          }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  }

  return (
    <>
    <form className="contact-form" id='contact-form' onSubmit={handleSubmit}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" id='name' />
      <label>Email</label>
      <input type="email" name="user_email" id='email' />
      <label>Message</label>
      <textarea name="message" id='message' />
      <input type="submit" value="Send" />
    </form>
    <GoogleReCaptcha onVerify={() => setIsVerified(true)} />
    </>
  )
}

export default ContactMeForm