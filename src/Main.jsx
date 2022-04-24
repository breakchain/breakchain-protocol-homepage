import React, {Component} from 'react'
import textimage1 from './assets/images/breakchain/images/homepage_slices_4_01.png'
import textimage2 from './assets/images/breakchain/images/homepage_slices_4_02.png'
import textimage3 from './assets/images/breakchain/images/homepage_slices_4_03.png'
import textimage4 from './assets/images/breakchain/images/homepage_slices_4_04.png'
import {Carousel} from 'react-responsive-carousel'


class Main extends Component {
  render() {
    return (
      <div className="main" >
         <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true} width={400} interval={4500} transitionTime={500} dynamicHeight={false} showIndicators={false} showStatus={false}>
          <div className="maintext">
            <img src={textimage1} alt="" />
          </div>
          <div className="maintext">
            <img src={textimage2} alt="" />
          </div>
          <div className="maintext">
            <img src={textimage3} alt="" />
          </div>
          <div className="maintext">
            <img src={textimage4} alt="" />
          </div>
        {/* export const base = () => <Carousel {...getConfigurableProps()}>{baseChildren.props.children}</Carousel>; */}
        </Carousel>
      </div>
     );
  }
}

export default Main;