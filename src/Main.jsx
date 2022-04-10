import React, {Component} from 'react'
import textimage from './assets/images/breakchain/breakchain_homepage.png'


class Main extends Component {
  render() {
    return (
      <div className="main" >
        <div style={{float:'left',marginLeft:20 + 'px'}}>
          <img src={textimage} alt="" />
        </div>
        
      </div>
     );
  }
}

export default Main;