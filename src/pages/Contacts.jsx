import React from "react";
import "../assets/styles/contacts.css";
import localisation from "../assets/images/contact/location-pin.png";
import email from "../assets/images/contact/mail.png";
import num_tel from "../assets/images//contact/phone.png";
import linkedin from "../assets/images/contact/linkedin.png";

const Contacts = () => {
    return (
        <>
            <div className="contact">
                <h1>Contacts</h1>
                <div className="content">
                    <div className="content-contact">
                        <img src={ localisation } alt="localisation" />
                        <p>Lot II Y 5 Bis ACJ Ouest Antanimora</p>
                    </div>
                    <div className="content-contact">
                        <img src={ email } alt="e-mail" />
                        <a href="mailto:rasolofomanananjakatahiana@gmail.com"><p>rasolofomanananjakatahiana@gmail.com</p></a>
                    </div>
                    <div className="content-contact">
                        <img src={ num_tel } alt="numero-telephone" />
                        <p>032 64 424 60</p>
                    </div>
                    <div className="content-contact">
                        <img src={ linkedin } alt="linkedin" />
                        <a href="https://www.linkedin.com/in/njaka-tahiana/"><p>linkedin.com/in/njaka-tahiana</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts