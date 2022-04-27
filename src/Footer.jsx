import React, {Component} from 'react'
import Social from './Social';
import { TextField } from '@mui/material';
import MyButton from './MyButton';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          {/* <div className=''> */}
             <div className="dapp-menu-social">
                <Social />
            </div>
            <div className=".btn-arr">Test</div>
            {/* <div className="emailSection">
                <TextField variant="outlined" id="email" label="Email" color="primary" size="small" helperText="Enter Email" focused />
                <MyButton
                    name="Submit"
                    href=""
                    
                >
                </MyButton>
            </div> */}
          {/* </div> */}
      </div>
     );
  }
}

export default Footer;