import React, {Component} from 'react'
import MyButton from './MyButton';


class Header extends Component {
  
  render() {
    const { price } = this.props;

    return (
      <div className="header">
        <div className="priceHolder">
          <span className="priceticker">XCHAIN Price</span> <span className="price">${ price }</span>
        </div>
        <div className='enterbutton'>
          <MyButton
            name="Enter App"
            href="https://breakchain-protocol.money"
          >
          </MyButton>
        </div>
      </div>
     );
  }
}

export default Header;