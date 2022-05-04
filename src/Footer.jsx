import React, { useCallback, useState } from 'react'
import Social from './Social';
import { TextField } from '@mui/material';
import MyButton from './MyButton';
import { Api, BASE_URL } from './service/api';
import { StyledEngineProvider } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';


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
              color="primary" 
              size="small" 
              
              focused 
            />
          </div>
           
            <MyButton
                className="emailButton"
                name="Submit"
                handleClick={() => submitEmail()}
            >
            </MyButton>
        </div> 
      </div>
      </StyledEngineProvider>
     );
};

export default Footer;