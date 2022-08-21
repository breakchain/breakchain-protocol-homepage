import React, {Component} from 'react'
import logo from './assets/images/breakchain/black_logo2.png'

class MainBlack extends Component {
  constructor() {
    super();
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className='mainblack'>
        <div className='mainblackHolder'>
          <div className='blacktext'>
            <div>
              Get XCHAIN at a <br></br>discount by buying <br></br>Treasury <a href="https://www.breakchain-protocol.money/#/bonds" target="_blank">Bonds</a>
            </div>
            <br/>
            <div>
              The first 369 wallets
              <br></br>will receive 3.69 free
              <br></br>XCHAIN via <a href="https://www.breakchain-protocol.money/#/airdrop" target="_blank">Air Drop</a>
            </div>
          </div>
          <div className='mainblackLogo'>{ <img src={logo} alt="" /> }</div>
          <div className='blacktext'>
            <div>Earn APY by <a href="https://www.breakchain-protocol.money/#/stake" target="_blank">staking</a> <br></br>your XCHAIN</div>
            <br/>
            <div>Rewards are distributed <br></br>every 8 hours</div>
          </div>
        </div>
      </div>
     );
  }
}

export default MainBlack;