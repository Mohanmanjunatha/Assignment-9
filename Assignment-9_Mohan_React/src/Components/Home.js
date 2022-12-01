import React from "react";
import './Home.css'
import { useNavigate } from 'react-router-dom';
import tech from '../Images/tech.jpeg';
import analytics from '../Images/analyticss.jpg';
import busines from '../Images/business-meeting.png';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import Footer from './Footer';

const Home = () => {
    //Navigation Router:
    let navigate = useNavigate();
    //Strings:
    const cardTitle = "Technology Consulting";
    const cardPara = "Click the below button to explore our offerings!";
    const cardButton = "View More";
    const servicesTitle = "Our Services";
    const servicesList1 = "Web Development";
    const servicesList2 = "Web Scrapping";
    const servicesList3 = "Cloud Computing";
    const servicesList4 = "Mobile Development";
    const servicesList5 = "Digital Marketing";
    const servicesList6 = "UI/UX";
    const servicesList7 = "Graphic Design";
    const servicesList8 = "Custom Software";
    //Use States:

    //Functions: 

    return (
        <div className="homeBodyWrapper">
            <div className="contentWrapper">
                <div className="cardWrapper">
                    <div className="cardContent">
                        <div className="cardHeadingWrapper">
                            <h2>{cardTitle}</h2>
                        </div>
                        <div className="cardParaWrapper">
                            <p>{cardPara}</p>
                        </div>
                        <div className="cardBtnWrapper">
                            <button type="button" className="btn btn-success">{cardButton}</button>
                        </div>
                    </div>
                </div>
                <div className="imageWrapper">
                    <img id="businessImage" src={busines} alt="tech image" />
                </div>
            </div>
            <div className="ourServicesWrapper">
                <div className="servicesTitle">
                    <h2>{servicesTitle}</h2>
                </div>
                <div className="servicesCardWrapper">
                    <div className="servciesCard1">
                        <MDBCard>
                            <MDBCardImage id="servicesTechImage" position='top' alt='...' src={tech} />
                            <MDBCardBody>
                                <MDBCardTitle>Tech</MDBCardTitle>
                            </MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem>{servicesList1}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList2}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList3}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList4}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList5}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList6}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList7}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList8}</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCard>
                    </div>
                    <div className="servciesCard2">
                        <MDBCard>
                            <MDBCardImage id="servicesAnalyticsImage" position='top' alt='...' src={analytics} />
                            <MDBCardBody>
                                <MDBCardTitle>Analytics</MDBCardTitle>
                            </MDBCardBody>
                            <MDBListGroup flush>
                                <MDBListGroupItem>{servicesList1}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList2}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList3}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList4}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList5}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList6}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList7}</MDBListGroupItem>
                                <MDBListGroupItem>{servicesList8}</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCard>
                    </div>
                </div>
            </div>
            <div className="footerWrapper">
                <Footer />
            </div>
        </div>
    );
}

export default Home;