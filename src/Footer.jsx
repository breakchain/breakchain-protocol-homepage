import React, { useCallback, useState } from 'react'
import Social from './Social';
import { TextField } from '@mui/material';
import MyButton from './MyButton';
import { Api, BASE_URL } from './service/api';

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
      <div className="footer">
          {/* <div className=''> */}
             <div className="dapp-menu-social">
                <Social />
            </div>
            <div className="emailSection">
                <TextField variant="outlined" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email' id="email" label="Email" color="primary" size="small" focused />
                <MyButton
                    name="Submit"
                    handleClick={() => submitEmail()}
                >
                </MyButton>
            </div> */}
          {/* </div> */}
      </div>
     );
};

export default Footer;