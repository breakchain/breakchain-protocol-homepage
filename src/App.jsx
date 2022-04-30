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
      xchainprice: 0
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
        }
    )
  }

  render() {
    return (
      // <ThemeProvider theme={this.theme}>
        <div>
          <Header price={this.state.xchainprice}/>
          <Main />
          {/* <Videos /> */}
          <Partners />
          <Footer />
        </div>
      // </ThemeProvider>
     );
  }
}

export default App;
