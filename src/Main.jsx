import React, {Component} from 'react'
import textimage1 from './assets/images/breakchain/images/homepage_slices_4_01.png'
import textimage2 from './assets/images/breakchain/images/homepage_slices_4_02.png'
import textimage3 from './assets/images/breakchain/images/homepage_slices_4_03.png'
import textimage4 from './assets/images/breakchain/images/homepage_slices_4_04.png'
class Main extends Component {
  render() {
    return (
      <div className="main" >
        <div className="slides1">
          <div className="slideBlock">
            <div className="maintext">
              <img src={textimage1} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage3} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage4} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage2} alt="" />
            </div>
          </div>
          <div className="slideBlock">
            <div className="maintext">
              <img src={textimage1} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage3} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage4} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage2} alt="" />
            </div>
          </div>
          <div className="slideBlock">
            <div className="maintext">
              <img src={textimage1} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage3} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage4} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage2} alt="" />
            </div>
          </div>
          <div className="slideBlock">
            <div className="maintext">
              <img src={textimage1} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage3} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage4} alt="" />
            </div>
            <div className="maintext">
              <img src={textimage2} alt="" />
            </div>
          </div>
        </div>
      </div>
     );
  }
}

export default Main;