import React, {Component} from 'react'
import logo_aws from './assets/images/logos_sm/aws_logo_smile.jpg'
import logo_quickswap from './assets/images/logos_sm/quickswap_logo.jpg'
import logo_github from './assets/images/logos_sm/github.jpg'
import logo_metamask from './assets/images/logos_sm/metamask.jpg'
import logo_heroku from './assets/images/logos_sm/heroku-vector-logo.jpg'
import logo_polygon from './assets/images/logos_sm/polygon-matic5119.jpg'
import logo_ud from './assets/images/logos_sm/Unstoppable_Domains.jpg'

class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <div className="footertitle">Strategic Partners</div>
            <div className="partnerholder">
                <div className="partner">
                    <a href="https://aws.amazon.com/">
                        <img src={logo_aws} alt="AWS" />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://quickswap.exchange/#/swap">
                        <img src={logo_quickswap} alt="guickswap" />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://github.com/">
                        <img src={logo_github} alt="Github" />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://metamask.io/">
                        <img src={logo_metamask} alt="Metamask" />
                    </a>
                </div>
                <div class="partner">
                    <a href="https://id.heroku.com/">
                        <img src={logo_heroku} alt="heroku" />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://polygon.technology/matic-token/">
                        <img src={logo_polygon} alt="Polygon" />
                    </a>
                </div>
                <div className="partner">
                    <a href="https://unstoppabledomains.com/">
                        <img src={logo_ud} alt="Unstoppable_Domains" />
                    </a>
                </div>
            </div>
            <div style={{clear:'both'}}></div>
      </div>
     );
  }
}

export default Footer;