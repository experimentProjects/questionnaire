import React from 'react'
import logo from '../assets/images/logo.png';
import logoBig from '../assets/images/q-img-logo.svg';
import { Row, Col, Container } from 'reactstrap';
import {useSpring, animated} from 'react-spring'

interface Props {
    next: () => void;
}

const Homepage = (props: Props) => {
   const anim = useSpring({
       from: { opacity: 0},
       to: {opacity: 1},
   });

    return (
        <div className="page">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <Container>
                <Row>
                    <Col lg='12' sm='12' className="main">
                        <div data-aos="fade-right" className="logo-mid">
                            <img src={logoBig} alt="logoBig" />
                        </div>
                        <div className="about-txt">
                            <animated.div className="main-heading" style={anim}>
                                <h3>
                                    We at Questionnaire
                                </h3>
                            </animated.div>
                            <div>
                                <p>
                                are dedicated to perform survey for collecting data as research for determining the best direction before starting the development of a website. 
                                </p>
                                <div data-aos="zoom-in" 
                                data-aos-duration="500" data-aos-easing="ease-in-out"
                                className="button-cnter">
                                    <button name="next" onClick={props.next} type="button">START SURVEY</button>
                                </div>
                                <p className="error">*(Please do not refresh the page once you enter into questionnaire.)</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>   
        </div>
    )
}

export default Homepage
