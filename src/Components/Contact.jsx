import React, { useRef, useState } from 'react'
import Map from "./Map";
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  const [error, setError] = useState(null);

  const form = useRef();

  const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_bg65x0d', 'template_m2dlv8n', form.current, '6wBqthpMqYBlmxOLU')
      .then((result) => {
          console.log(result.text);
          setError(false)
      }, (error) => {
          console.log(error.text);
          setError(true);
      });

      setName("");
      setEmail("");
      setMsg("");
      setError(null);
  }

  return (
    <section>
        <div className="row">

          <div className="col1">
              
              <form className='form' ref={form} onSubmit={handleSubmit}>
                <div className="form-title">Contact Us</div>

                <input type="text" placeholder='Name' name='name' className='input-field' value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="email" placeholder='Email' name='email' className='input-field' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <textarea name="message" cols="30" rows="6" className='input-field' placeholder='Type your message here...' value={msg} onChange={(e) => {setMsg(e.target.value)}}></textarea>
                <button className='btn form-btn'><i className='fas fa-paper-plane'></i> Send Message</button>
                {!error ? <span>Your response has beeen sent</span> : null}
              </form>

          </div>

          <div className="col2">
            <Map/>
          </div>

        </div>
    </section>
  )
}
