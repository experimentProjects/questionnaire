import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import logo from '../assets/images/logo.svg';
import { useForm } from "react-hook-form";
import anim from '../assets/animation/project.gif';

type FormData = {
    aboutYou : string;
    redesign: string;
    slogan: string;
    pages: string;
    notRequired: string;
};

interface Props {
    next: () => void;
    prev: () => void;
    setUserDetail: React.Dispatch<React.SetStateAction<FormData>>;
    userDetails: FormData;
    section: number;
}



const FormProjectIntroduction = (props: Props) => {
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [isReady, setIsReady] = useState(false);

    const onSubmit = (data: FormData) => {
        props.setUserDetail(data);
        setIsReady(true);
    }
   
    return (
        <>
            <Row>
                <Col lg='4' className="left-col">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="page-name">
                        <div className="pagenumber">
                            <h3>03</h3>
                        </div>
                        <div className="heading">
                            <h2>Project Introduction</h2>
                        </div>
                    </div>
                    <div className="subheading">
                        <p>These information will make us understand you and your projects better. </p>
                        <p className="lets-begin">- Let's Begin</p>
                    </div>
                </Col>
                <Col data-aos="fade-left" lg='8' className="right-col">
                    <div className="animation">
                        <img src={anim} alt='anim' />
                        <p className="lg-txt">CREATE BETTER TOGETHER</p>
                        <p className="sml-txt">"Tell us about your PROJECT"</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <div className="form-cnt row">
                            <div className="input-field">
                                <label>1. Please describe your organization in a few sentences.</label><span>*</span>
                                {errors.aboutYou && <p>*This field is required</p>}
                                <input ref={ register({ required: true }) } 
                                name="aboutYou" type="text" 
                                defaultValue= {props.userDetails.aboutYou}/>
                            </div>
                            <div className="input-field">
                                <label>2. Why do you want to have a new website, or have your current site redesigned?</label><span>*</span>
                                {errors.redesign && <p>*This field is required</p>}
                                <input ref={ register({ required: true }) } 
                                name="redesign" type="text" 
                                defaultValue= {props.userDetails.redesign}/>
                            </div>
                            <div className="input-field">
                                <label>3. Do you have a slogan or tagline that clearly describes what you offer in terms of benefits or features? If yes, what is that?</label><span>*</span>
                                {errors.slogan && <p>*This field is required</p>}
                                <input ref={ register({ required: true }) } 
                                name="slogan" type="text" 
                                defaultValue= {props.userDetails.slogan}/>
                            </div>
                            <div className="input-field">
                                <label>4. List out the pages you want on your website. (Use ",")</label><span>*</span>
                                {errors.pages && <p>*This field is required</p>}
                                <input className="pages" ref={ register({ required: true }) } 
                                name="pages" type="text" 
                                defaultValue= {props.userDetails.pages}/>
                            </div>
                            <div className="input-field">
                                <label>5. What do you NOT want on your site in terms of text, content, etc.? (Use ",")</label><span>*</span>
                                {errors.notRequired && <p>*This field is required</p>}
                                <input ref={ register({ required: true }) } 
                                name="notRequired" type="text" 
                                defaultValue= {props.userDetails.notRequired}/>
                            </div>
                            <div className="button-cnt">
                                <button className="prev" name="prev" onClick={props.prev} type="button">Previous</button>
                                <input className="save" type="submit" value="Save" />
                                { isReady && <button className="next" name="next" onClick={props.next} type="button">Next</button> }
                            </div>
                        </div> 
                    </form>
                </Col>
            </Row>
        </>
    )
}

export default FormProjectIntroduction
