import React from 'react';
import {Container } from 'reactstrap';
import logo from '../assets/images/logo-u.svg';

interface Props {
}

const Success = (props: Props) => {
    return (
        <>
        
        <Container>
            <div className="box"
                data-aos="zoom-in" 
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-easing="ease-in-out">
                <div className="suc-logo">
                    <img src={logo} alt='logo'/>
                </div>
                <h2>Thank You</h2>
                <p className="first-sub">For Your Response</p>
                <hr/>
                <p className="second-sub">Our Team Will Soon Contact You, Till Then Stay Tuned!</p>
            </div>
        </Container>
        </>
    )
}

export default Success
