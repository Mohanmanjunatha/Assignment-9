import React, { useState } from "react";
import './Contact.css';
import contact from '../Images/contact.png';
import Footer from './Footer';



const Contact = () => {

    //Use states:
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    //Functions:
    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
        console.log(event.target.value);
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
        console.log(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');
        alert("Form Submitted!");
    }



    return (
        <div className="contactBodyWrapper">
            <div className="contactImage">
                <img alt="contactImage" src={contact} />
            </div>
            <div className="contactUsFormWrapper">
                <form onSubmit={submitHandler}>
                    <label>First Name</label>
                    <div className="firstNameInput">
                        <input onChange={firstNameHandler} type="text" placeholder="Enter your first name" />
                    </div>
                    <label>Last Name</label>
                    <div className="lastNameInput">
                        <input onChange={lastNameHandler} type="text" placeholder="Enter your name" />
                    </div>
                    <label>Email</label>
                    <div className="emailInput">
                        <input onChange={emailHandler} type="email" placeholder="Enter your email" />
                    </div>
                    <div className="formBtn">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
            <div className="contactFooterWrapper">
                <Footer />
            </div>
        </div>
    );
}

export default Contact;