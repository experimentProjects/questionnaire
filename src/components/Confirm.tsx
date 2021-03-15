import React from 'react';
import { Row, Col } from 'reactstrap';
import logo from '../assets/images/logo.svg';
import anim from '../assets/images/q-full-lg.png';

type FormData1 = {
    fullName: string;
    email: string;
    country: string;
    age: string;
    gender: string;
};

type FormData2 = {
    aboutUs: string;
    content: string;
    purpose: string;
    website1: string;
    website2: string;
    website3: string;
};

type FormData3 = {
    aboutYou : string;
    redesign: string;
    slogan: string;
    pages: string;
    notRequired: string;
};

interface Props {
    next : () => void;
    prev: () => void;
    UserDetail1: FormData1;
    UserDetails2: FormData2;
    UserDetails3: FormData3;
    section: number;
}

const Confirm = (props: Props) => {
    return (
        <>
            <Row>
                <Col lg='4' className="left-col">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="page-name">
                        <div className="pagenumber">
                            <h3>04</h3>
                        </div>
                        <div className="heading">
                            <h2>Confirm Details</h2>
                        </div>
                    </div>
                    <div className="subheading">
                        <p>See if you are missing something.</p>
                        <p className="lets-begin">- Let's Begin</p>
                    </div>
                </Col>
                <Col lg='8' className="right-col">
                    <div data-aos="fade-up" 
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        className="animation">
                        <img src={anim} alt='anim' />
                        <p className="lg-txt">CREATE BETTER TOGETHER</p>
                        <p className="sml-txt">"Verify Your Details"</p>
                    </div>
                    <div className="all-data">
                        <div data-aos="fade-up" 
                            data-aos-delay="50"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-out" 
                            className="section1">
                            <h2>Personal Details</h2>
                            <div className="data col-sm-12 col-12">
                                <p className="Question">Name</p>
                                <p className="Answer">{props.UserDetail1.fullName}</p>
                            </div>
                            <div className="data col-sm-12 col-12">
                                <p className="Question">Email</p>
                                <p className="Answer">{props.UserDetail1.email}</p>
                            </div>
                            <div className="data col-sm-12 col-12">
                                <p className="Question">Country</p>
                                <p className="Answer">{props.UserDetail1.country}</p>
                            </div>
                            <div className="data col-sm-12 col-12">
                                <p className="Question">Age</p>
                                <p className="Answer">{props.UserDetail1.age}</p>
                            </div>
                            <div className="data col-sm-12 col-12">
                                <p className="Question">Gender</p>
                                <p className="Answer">{(props.UserDetail1.gender !== null) ? props.UserDetail1.gender : "not specified"}</p>
                            </div>
                        </div>
                        <div className="section">
                            <h2>Further Details</h2>
                            <div className="data">
                                <p className="Question">1. How did you find out about us?</p>
                                <p className="Answer">{props.UserDetails2.aboutUs}</p>
                            </div>
                            <div className="data">
                                <p className="Question">2. Do you have your web content ready?</p>
                                <p className="Answer">{props.UserDetails2.content}</p>
                            </div>
                            <div className="data">
                                <p className="Question">3. Purpose of connection with us?</p>
                                <p className="Answer">{props.UserDetails2.purpose}</p>
                            </div>
                            <div className="data">
                                <p className="Question">4. List 3 websites you like, preferably in different industries.</p>
                                <p className="Answer">{props.UserDetails2.website1}</p>
                                <p className="Answer">{props.UserDetails2.website2}</p>
                                <p className="Answer">{props.UserDetails2.website3}</p>
                            </div>
                        </div>
                        <div className="section">
                            <h2>Project Details</h2>
                            <div className="data">
                                <p className="Question">1. Please describe your organization in a few sentences.</p>
                                <p className="Answer">{props.UserDetails3.aboutYou}</p>
                            </div>
                            <div className="data">
                                <p className="Question">2. Why do you want to have a new website, or have your current site redesigned?</p>
                                <p className="Answer">{props.UserDetails3.redesign}</p>
                            </div>
                            <div className="data">
                                <p className="Question">3. Do you have a slogan or tagline that clearly describes what you offer in terms of benefits or features? If yes, what is that?</p>
                                <p className="Answer">{props.UserDetails3.slogan}</p>
                            </div>
                            <div className="data">
                                <p className="Question">4. List out the pages you want on your website.</p>
                                <p className="Answer">{props.UserDetails3.pages}</p>
                            </div>
                            <div className="data">
                                <p className="Question">5. What do you NOT want on your site in terms of text, content, etc.?</p>
                                <p className="Answer">{props.UserDetails3.notRequired}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="button-cnt">
                        <p>*Verify your responses carefully, you'll not be able to make changes afterwards.</p>
                        <button className="prev" name="prev" onClick={props.prev} type="button">Previous</button> 
                        <button className="next" name="next" onClick={props.next} type="button">Submit</button>    
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Confirm
