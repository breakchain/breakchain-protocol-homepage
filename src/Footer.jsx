import React, { useCallback, useState } from 'react'
import Social from './Social';
import { TextField } from '@mui/material';
import { Api, BASE_URL } from './service/api';
import { StyledEngineProvider } from '@mui/material/styles';
import RoundButton from './RoundButton';


const Footer = () => {
  const [email, setEmail] = useState();

  const submitEmail = useCallback(() => {
    Api.get(BASE_URL, "submit",  {email: email})
      .then(resp => {
        if(resp) {
          setEmail("");
        }
      })
  }, [email, setEmail]);

    return (
      <StyledEngineProvider injectFirst>
      <div className="footer">
        <div className="footerHolder">

          <div className='socialSection'>
            <Social />
          </div>

          <div className="contactSection">
            <div className="contactText">
              Contact Us
            </div>
            <div className="contactEmail">
            < a href="mailto:info@breakchain.money">info@breakchain.money</a>
            </div>
          </div>

          <div className="emailSection">
            <div className='emailHolder'>
              <div className='textfieldSection'>
              <div className='textfieldHeader'>Subscribe</div>
                <TextField 
                  variant="standard" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder='Enter Email' 
                  id="email" 
                  // label="Subscribe" 
                  size="small" 
                  focused 
                />
              </div>
              <RoundButton
                  className="emailButton"
                  handleClick={() => submitEmail()}
              >
              </RoundButton>
            </div>
          </div>

        </div> 
      </div>
      </StyledEngineProvider>
     );
};

export default Footer;