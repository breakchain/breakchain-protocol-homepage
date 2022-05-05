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
        <div className="dapp-menu-social">
            <Social />
        </div>
        <div className="emailSection">
          <div className='textfieldSection'>
            <TextField 
              variant="standard" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder='Enter Email' 
              id="email" 
              label="Subscribe" 
              size="small" 
              sx={{color:"#001DA3"}}
              
              focused 
            />
          </div>
           
            <RoundButton
                className="emailButton"
                name="Submit"
                handleClick={() => submitEmail()}
            >
            </RoundButton>
        </div> 
      </div>
      </StyledEngineProvider>
     );
};

export default Footer;