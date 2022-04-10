import React, {Component} from 'react'
import logo_aws from './assets/images/logos_sm/aws_logo_smile.jpg'


class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <h3>Strategic Partners</h3>
            <div>
                <div class="partner">
                    <a href="#">
                        <img src={logo_aws} alt="AWS" />
                    </a>
                </div>
                <div class="partner">
                    <a href="#">
                        <img src="./assets/images/logos_sm/ethereum-logo-portrait-black-gray.jpg" alt="AWS" />
                    </a>
                </div>
                <div class="partner">
                    <a href="#">
                        <img src="./assets/images/logos_sm/github.jpg" alt="AWS" />
                    </a>
                </div>
                <div class="partner">
                    <a href="#">
                        <img src="./assets/images/logos_sm/heroku-vector-logo.jpg" alt="AWS" />
                    </a>
                </div>
                <div class="partner">
                    <a href="#">
                        <img src="./assets/images/logos_sm/metamask.jpg" alt="AWS" />
                    </a>
                </div>
                <div class="partner">
                    <a href="#">
                        <img src="./assets/images/logos_sm/polygon-matic5119.jpg" alt="AWS" />
                    </a>
                </div>
                <div class="partner">
                    <a href="#">
                        <img src="./assets/images/logos_sm/Unstoppable_Domains.jpg" alt="AWS" />
                    </a>
                </div>
            </div>
      </div>
     );
  }
}

export default Footer;