import React, {Component} from 'react'


class Header extends Component {
  constructor() {
    super();
  }

  render() {
    const { price } = this.props;

    return (
      <div className="header">
        {/* <div className="enterbutton">
            <a style={{color:'white', textDecoration: 'none', fontFamily:'poppins'}} href="https://breakchain-protocol.money">
                Enter App
            </a>
        </div> */}
        <div className="priceticker">XCHAIN Price: <span style={{ color: '#32CBFF' }}>${ price }</span></div>
      </div>
     );
  }
}

export default Header;