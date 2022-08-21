import React, {Component} from 'react'
import MyButton from './MyButton';


class Header extends Component {
  
  render() {
    const { price } = this.props;
    const { apy } = this.props;

    return (
      <div className="header">
        <div className="priceHolder">
          <span className="priceticker">XCHAIN Price</span> <span className="price">${ price }</span>
        </div>
        <div className="apyHolder">
          <span className="apyticker">Current APY</span> <span className="apy">{ new Intl.NumberFormat('en-US',).format(apy) }%</span>
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