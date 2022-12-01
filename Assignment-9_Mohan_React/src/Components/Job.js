import React, { useState } from "react";
import './Job.css';
import wait from '../Images/wait.png';
import Footer from './Footer';


const Job = (props) => {
    const jobTitle = "Enter your details to see the waitlist for job!";
    const waitListText = "WaitList";

    //Use States:
    const [jobDes, setJobDesc] = useState('');
    const [jobExp, setJobExp] = useState('');
    const [jobName, setJobName] = useState('');

    //Functions:

    const jobDescHandler = (event) => {
        setJobDesc(event.target.value);
    }

    const jobExpHandler = (event) => {
        setJobExp(event.target.value);
    }

    const jobNameHandler = (event) => {
        setJobName(event.target.value);
    }


    const saveFormData = (enteredData) => {
        const data = {
            ...enteredData
        }
        props.addData(data);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formInput = {
            name: jobName,
            jobDesc: jobDes,
            exp: jobExp
        }
        saveFormData(formInput);
        setJobName('');
        setJobDesc('');
        setJobExp('');
        console.log(saveFormData);
    }


    return (
        <div className="jobBodyWrapper">
            <div className="jobTitleWrapper">
                <h2>{jobTitle}</h2>
            </div>

            <div className="jobImage">
                <img id="jobImageWait" alt="jobImage" src={wait} />
            </div>

            <div className="formWrapper">
                <form onSubmit={submitHandler}>
                    <div className="jobNameWrapper">
                        <label>Name</label>
                        <div className="nameInput">
                            <input value={jobName} onChange={jobNameHandler} type="text" />
                        </div>
                    </div>
                    <div className="jobDescWrapper">
                        <label>Job Desc</label>
                        <div className="descInput">
                            <input value={jobDes} onChange={jobDescHandler} type="text" />
                        </div>
                    </div>
                    <div className="jobExpWrapper">
                        <label>Experience</label>
                        <div className="expInput">
                            <input value={jobExp} onChange={jobExpHandler} type="text" />
                        </div>
                    </div>
                    <div className="jobBtn">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>

            <div className="waitListText">
                <h3>{waitListText}</h3>
            </div>

            {props.job.map((item) => {
                return (
                    <div key={item.name} className="jobDetailsWrapper">
                        <div className="jobNameWrapper">
                            <h3>{item.name}</h3>
                        </div>
                        <div className="jobDescWrapper">
                            <h3>{item.jobDesc}</h3>
                        </div>
                        <div className="jobExpWrapper">
                            <h3>{item.exp} years</h3>
                        </div>
                    </div>
                );
            })}
            <div className="jobFooterWrapper">
                <Footer />
            </div>
        </div>
    );
}

export default Job;