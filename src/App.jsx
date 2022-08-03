import React, {Component} from 'react'
import './App.scss';
import Header from './Header';
import Main from './Main';
import Partners from './Partners';
import Footer from './Footer';
import Videos from './Videos';
import { createTheme, ThemeProvider } from '@mui/material/styles';


class App extends Component {
  theme = createTheme({
    palette: {
      primary: {
        main: '#32CBFF',
        secondary: '#32CBFF',
      },
    },
  });

  constructor() {
    super();
    this.state = {
      xchainprice: 0,
      xchainapy: 0
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 1000*60*1);// 1000 miliseconds * 60 * 30 = every 30 minutes
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
          this.setState({ xchainapy: data.body['APY'].toFixed(0) });
        }
    )
  }

  render() {
    return (
        <div>
          <Header price={this.state.xchainprice} apy={this.state.xchainapy}/>
          <Main />
          <div className='mainblack'>
            <h2>test text</h2>
          </div>
          <Videos />
          <Partners />
          <Footer />
        </div>
     );
  }
}

export default App;
