import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import logo from '../assets/images/logo.svg';
import { useForm } from "react-hook-form";
import anim from '../assets/animation/intro.gif';

type FormData = {
    aboutUs: string;
    content: string;
    purpose: string;
    website1: string;
    website2: string;
    website3: string;
};

interface Props {
    next: () => void;
    prev: () => void;
    setUserDetail: React.Dispatch<React.SetStateAction<FormData>>;
    userDetails: FormData;
    section: number;
}



const FormFurtherDetails = (props: Props) => {
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
                            <h3>02</h3>
                        </div>
                        <div className="heading">
                            <h2>Further Details</h2>
                        </div>
                    </div>
                    <div className="subheading">
                        <p>It's time to come a little closer. Please help us improve ourselves. </p>
                    </div>
                </Col>
                <Col data-aos="fade-left" lg='8' className="right-col">
                    <div className="animation">
                        <img src={anim} alt='anim' />
                        <p className="lg-txt">CREATE BETTER TOGETHER</p>
                        <p className="sml-txt">"Let's come a little closer"</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <div className="form-cnt">
                            <div className="input-field">
                                <label>1. How did you find out about us?</label><span>*</span>
                                {errors.aboutUs && <p>*This field is required</p>}
                                <input ref={ register({ required: true }) } name="aboutUs" type="text"  
                                defaultValue = {props.userDetails.aboutUs} />
                            </div>
                            <div className="input-field">
                                <label>2. Do you have your web content ready?</label><span>*</span>
                                {errors.content && <p>*This field is required</p>}
                                <input ref={ register({ required: true }) } name="content" type="text"  
                                defaultValue = {props.userDetails.content} />
                            </div>
                            <div className="input-field">
                                <label>3. Purpose of connection with us?</label><span>*</span>
                                {errors.purpose && <p>*This field is required</p>}
                                <input ref={ register({ required: true }) } name="purpose" type="text" 
                                defaultValue = {props.userDetails.purpose} />
                            </div>
                            <div className="input-field">
                                <label>4. List 3 websites you like, preferably in different industries.</label><span>*</span>
                                {errors.website1 && <p>*This field is required</p>}
                                <input className="websites" ref={ register({ required: true }) } 
                                name="website1" type="text" defaultValue = {props.userDetails.website1} />
                                {errors.website2 && <p>*This field is required</p>}
                                <input className="websites" ref={ register({ required: true }) }
                                name="website2" type="text" defaultValue = {props.userDetails.website2} />
                                {errors.website3 && <p>*This field is required</p>}
                                <input className="websites" ref={ register({ required: true }) } 
                                name="website3" type="text" defaultValue = {props.userDetails.website3}/>
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

export default FormFurtherDetails
