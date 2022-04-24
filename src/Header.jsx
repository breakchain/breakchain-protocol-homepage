import React, {Component} from 'react'
import MyButton from './MyButton';


class Header extends Component {
  
  render() {
    const { price } = this.props;

    return (
      <div className="header">
        <div className='enterbutton'>
          <MyButton
            name="Enter App"
            href="https://breakchain-protocol.money"
          >
          </MyButton>
        </div>
        <div className="priceticker">XCHAIN Price: <span style={{ color: '#32CBFF' }}>${ price }</span></div>
      </div>
     );
  }
}

export default Header;