import React from 'react'
import emailjs from 'emailjs-com'

export default function ContactUs () {
  function sendEmail (e) {
    e.preventDefault()

    emailjs.sendForm('service_r9l20s7', 'template_7tw16ho', e.target, 'user_Rj2yKyFEMTlfma4c44jwR')
      .then((result) => {
        return console.log(result.text)
      }).catch(error => {
        return console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <>
      <div className="form">
        <div className="formLeft">
          <img src="./img/logo-txt-orange.png" alt="logo" className="logoImg"/>
        </div>
        <div className="formRight">
          <h1>Contact Us</h1>
          <form onSubmit={sendEmail}>

            <input type="text" className="formInput" placeholder="Name" name="name" />

            <input type="email" className="formInput" placeholder="Email Address" name="email" />

            <input type="text" className="formInput" placeholder="Subject" name="subject" />

            <textarea className="textarea" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>

            <input type="submit" className="button primaryBtn" value="Send Message"></input>
          </form>
        </div>

      </div>
    </>
  )
}
