import React, {Component} from 'react'
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      xchainprice: 0
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 1000*60*30);// 1000 miliseconds * 60 * 30 = every 30 minutes
  };

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
}

  fetchUsers() {
    fetch('https://api.breakchain.money/api/dashboardMetrics')
      .then(response => response.json())
      .then(
        data => {
          this.setState({ xchainprice: data.body['xchain-price'].toFixed(2) });
        }
    )
  }

  render() {
    return (
      <div>
        <Header price={this.state.xchainprice}/>
        <Main />
        <Footer />
      </div>
     );
  }
}

export default App;
