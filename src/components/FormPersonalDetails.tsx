import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import logo from '../assets/images/logo.svg';
import { useForm } from "react-hook-form";
import hello from '../assets/images/q-full-logo.svg';


type FormData = {
    fullName: string;
    email: string;
    country: string;
    age: string;
    gender: string;
};

type CountryResponse = {

}

interface Props {
    next: () => void;
    setUserDetail: React.Dispatch<React.SetStateAction<FormData>>;
    userDetails: FormData;
    section: number;
}

const FormPersonalDetails = (props: Props) => {

    const { register,handleSubmit, errors } =  useForm<FormData>();
    const [isReady, setIsReady] = useState(false);
    
    const onSubmit = (data: FormData) => {
            props.setUserDetail(data);
            setIsReady(true); 
    };
    
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        fetch(
          `https://restcountries.eu/rest/v2/all`,
          {
            method: "GET"
          }
        )
          .then(res => res.json())
          .then(response => {
            console.log(response);

            let select = document.getElementById('country');
            let options = `<option value="select" placeholder="Select country..."></option>`;
            let temp = response.map((res:any) => {
                options += `<option ${(props.userDetails.country === res.name)? "selected": ""} 
                value="${res.name}">${res.name}</option>`;
                return true;
            });
            setIsLoading(false);
            if(select) {
                select.innerHTML = options;
            }
          })
          .catch(error => alert(error));
      }, [page, props.userDetails.country]);

    
    return (
        <>
            <Row>
                <Col lg='4' className="left-col">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="page-name">
                        <div className="pagenumber">
                            <h3>01</h3>
                        </div>
                        <div className="heading">
                            <h2>Personal Details</h2>
                        </div>
                    </div>
                    <div className="subheading">
                        <p>Let’s not go too fast and start with a basic introduction. Tell us about yourself a bit.</p>
                        <p className="lets-begin">- Let's Begin</p>
                    </div>
                </Col>
                <Col data-aos="fade-left" lg='8' className="right-col">
                    <div className="animation">
                        <img src={hello} alt='hello' />
                        <p className="lg-txt">CREATE BETTER TOGETHER</p>
                        <p className="sml-txt">"We'd Love to hear from you"</p>
                    </div>
                    <form id="myForm" onSubmit={handleSubmit(onSubmit)}> 
                        <div className="form-cnt">
                            <div className="input-field">   
                                {/* {errors.firstName && "First name is required"} */}
                                {errors.fullName && <span>*This field is required & accepts only alphabets</span>}
                                <span>*</span><input ref={ register({ required: true,  pattern: /^[a-zA-Z ]*$/ }) }  
                                name="fullName" type="text" placeholder="Enter your name" 
                                defaultValue = {props.userDetails.fullName} />
                                {/* // {console.log("fullName", props.UserDetails.fullName)} */}
                            </div>
                            <div className="input-field">
                                {errors.email && <span>*This field is required & acceepts only valid email addresses</span>}
                                <span>*</span><input ref={ register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }) } 
                                name="email" type="text" placeholder="Enter your Email" 
                                defaultValue = {props.userDetails.email} />
                            </div>
                            <div className="input-field">
                                {errors.country && <span>*This field is required</span>}
                                <span>*</span><select ref={ register({ required: true }) } name="country" id="country"   >
                                    <option value="select">Select country...</option>
                                </select>
                            </div>
                            <div className="input-field">
                                {errors.age && <span>*This field is required</span>}
                                <span>*</span><input ref={ register({ required: true }) } name="age" type="text" 
                                placeholder="Enter your age" defaultValue = {props.userDetails.age } 
                                />
                            </div>
                            <div className="inp-field">
                                <div className="gender">
                                    <input ref={ register }
                                    type="radio" value="male" name="gender"
                                    defaultChecked = { (props.userDetails.gender === "male") }
                                    /><span>Male</span>
                                </div>
                                <div id="female" className="gender">
                                    <input ref={ register } type="radio" 
                                    value="female" name="gender"
                                    defaultChecked = { (props.userDetails.gender === 'female') }
                                    /><span>Female</span> 
                                </div>
                            </div>
                            
                            <div className="button-cnt">
                                <input className="save" type="submit" value="Save"/>
                                { isReady && !errors.email && !errors.fullName && !errors.country && !errors.age && <button className="next" name="next" onClick={props.next} type="button">Next</button> }   
                            </div>

                            {/* const [items, set] = useState([...])
                            const transitions = useTransition(isReady, ready => item.key, {
                            from: { transform: 'translate3d(0,-40px,0)' },
                            enter: { transform: 'translate3d(0,0px,0)' },
                            leave: { transform: 'translate3d(0,-40px,0)' },
                            })
                            return transitions.map(({ item, props, key }) =>
                            <animated.div key={key} style={props}>{item.text}</animated.div>
                            ) */}
                        </div> 
                    </form>
                </Col>
            </Row>
        </>
    )
}

export default FormPersonalDetails