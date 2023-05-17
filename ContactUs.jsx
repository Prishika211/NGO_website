import React from 'react'
import { BsMailbox2 ,BsTelephoneOutbound} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div className="containerContact">
    <h1>Contact Us</h1>
    <p>Feel free to reach out to us with any questions or inquiries.</p>
    <div className="contact-main">
    <div className="contact-info">
      <div className="contact-item">
        
        <BsTelephoneOutbound></BsTelephoneOutbound>
        
                                <p>
                                    0977-78-412151
                                </p>

      </div>
      <div className="contact-item">
      <BsMailbox2></BsMailbox2>
      <p>
                                        indreni@ntc.net.np
                                    </p>
      </div>
      <div className="contact-item">
      <AiOutlineMail></AiOutlineMail>
        <p>
                                Bardaghat Nagarpalika,<br/> 9 Nawalparasi, <br/> Nepal
                            </p>
      </div>
    </div>
{/*     <div className="sendmessage"><h2>Send us a message</h2></div>
 */}    <form action="submit_form.php" method="POST">
        <div className="F1">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>
      </div>

      <div className="F2">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>
      </div>

      <div className="F3">
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      </div>
<div className="submit">
      <input type="submit" value="Submit"/>
      </div>
    </form>
    </div>
  </div>


    

  )
}

export default ContactUs