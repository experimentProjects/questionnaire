
import React, { useState } from 'react';
import '../assets/scss/App.scss';
import FormPersonalDetails from '../components/FormPersonalDetails';
import Homepage from '../components/Homepage';
import FormFurtherDetails from './../components/FormFurtherDetails';
import FormProjectIntroduction from './../components/FormProjectIntroduction';
import Success from '../components/Success';
import Confirm from '../components/Confirm';
import { Container } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


function UserForm() {
  if(typeof window !== `undefined`) {
    AOS.init({
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });// Animate on scroll library
  }
  
  const [section, changeSection] = useState(1);
  const [UserDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    country: "",
    age: "",
    gender: ""
  });

  const [UserDetails2, setUserDetails2] = useState ({
    aboutUs: "",
    content: "",
    purpose: "",
    website1: "",
    website2: "",
    website3: ""
  })

  const [UserDetails3, setUserDetails3] = useState ({
    aboutYou: "",
    redesign: "",
    slogan: "",
    pages: "",
    notRequired: ""
  })

  const nextSection = () => changeSection( section + 1 );
  const prevSection = () => changeSection( section - 1 );
  
  switch( section ){
    case 1 : return (
      <Container className="App">
        <Homepage 
          next = {nextSection} 
        />
      </Container>
    ) 
    case 2 : 
      return (
        <div className="App container-fluid">
          <FormPersonalDetails 
              next = {nextSection} 
              setUserDetail = {setUserDetails} 
              userDetails = {UserDetails}
              section = {section} />
              {console.log( nextSection,  changeSection)}
        </div>
        
    )
    case 3: return (
      <div className="App container-fluid">
        <FormFurtherDetails
          next = {nextSection}
          prev = {prevSection}
          setUserDetail = {setUserDetails2}
          userDetails = {UserDetails2}
          section = {section} />
      </div>
    )
    case 4: return (
      <div className="App container-fluid">
        <FormProjectIntroduction
          next = {nextSection}
          prev = {prevSection}
          setUserDetail = {setUserDetails3}
          userDetails = {UserDetails3}
          section = {section} />
      </div>
    )

    case 5: return (
      <div className="App container-fluid">
        <Confirm 
          next = {nextSection}
          prev = {prevSection}
          UserDetail1 = {UserDetails}
          UserDetails2 = {UserDetails2}
          UserDetails3 = {UserDetails3}
          section = {section} />
      </div>
    )

    case 6: return (
      <div className="App success-page container-fluid">
        <Success />
      </div>
    )
    default: return <h1>Error 404</h1>
  }
}

export default UserForm;
