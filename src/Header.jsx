import React, {Component} from 'react'


class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* <div className="enterbutton">
            <a style={{color:'white', textDecoration: 'none', fontFamily:'poppins'}} href="https://breakchain-protocol.money">
                Enter App
            </a>
        </div> */}
        <div className="priceticker">XCHAIN Price: <span style={{color:'#32CBFF'}}>$0.00</span></div>
      </div>
     );
  }
}

export default Header;