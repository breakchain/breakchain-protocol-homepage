import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  <>
  <Header>
      <!-- <div style="width:20pxpx;height:30px;float:right;display:block;"></div> -->
      <div class="enterbutton">
          <a style="color:white; text-decoration: none" href="https://breakchain-protocol.herokuapp.com/#/dashboard">
              Enter
          </a>
      </div>
      <div class="logo">
          <img src="assets/images/breakchain/logo_black_sm.png" alt="Breakchain Protocol">
      </div>
  </Header>
  <section class="statholder">
      <div class="statbox">Price</div>
      <div class="statbox">Price Floor</div>
  </section>
  <section class="main">
      <h1>"welcome to smart liquidity"</h1>  

      <h3>
          Introducing BreakChain Protocol (XCHAIN)<br>
          a decentralized algorithmic reserve currency
          running on the Polygon Network backed by 
          tokenized real estate and other stable assets
      </h4>
  </section>
  
  <footer>
      <h3>Strategic Partners</h3>
      <div>
          <div class="partner">
              <a href="">
                  <img src="assets/images/logos_sm/aws_logo_smile.jpg" alt="AWS">
              </a>
          </div>
          <div class="partner">
              <a href="">
                  <img src="assets/images/logos_sm/ethereum-logo-portrait-black-gray.jpg" alt="AWS">
              </a>
          </div>
          <div class="partner">
              <a href="">
                  <img src="assets/images/logos_sm/github.jpg" alt="AWS">
              </a>
          </div>
          <div class="partner">
              <a href="">
                  <img src="assets/images/logos_sm/heroku-vector-logo.jpg" alt="AWS">
              </a>
          </div>
          <div class="partner">
              <a href="">
                  <img src="assets/images/logos_sm/metamask.jpg" alt="AWS">
              </a>
          </div>
          <div class="partner">
              <a href="">
                  <img src="assets/images/logos_sm/polygon-matic5119.jpg" alt="AWS">
              </a>
          </div>
          <div class="partner">
              <a href="">
                  <img src="assets/images/logos_sm/Unstoppable_Domains.jpg" alt="AWS">
              </a>
          </div>
      </div>
    </footer>
    </>
}

export default App;
