import React, {Component} from 'react'


class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="enterbutton">
            <a style={{color:'white', textDecoration: 'none'}} href="https://breakchain-protocol.money">
                Enter
            </a>
        </div>
        <div className="priceticker">$XCHAIN Price: <span style={{color:'blue'}}>$0.00</span></div>
      </div>
     );
  }
}

export default Header;