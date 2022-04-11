import React, {Component} from 'react'
import textimage from './assets/images/breakchain/breakchain_homepage2.png'


class Main extends Component {
  render() {
    return (
      <div className="main" >
        <div className="maintext">
          <img src={textimage} alt="" />
        </div>
        
      </div>
     );
  }
}

export default Main;