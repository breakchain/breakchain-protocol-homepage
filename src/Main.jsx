import React, {Component} from 'react'
import SlideImage from './SlideImage';

class Main extends Component {
  constructor() {
    super();
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="main" >
        <div className="slides1">
          <div className="slideBlock">
            <SlideImage />
          </div>
          <div className="slideBlock">
            <SlideImage />
          </div>
          <div className="slideBlock">
            <SlideImage />
          </div>
          <div className="slideBlock">
            <SlideImage />
          </div>
        </div>
      </div>
     );
  }
}

export default Main;