/* eslint-disable @typescript-eslint/no-unsafe-return */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Greeting from './components/Greeting/Greeting';
import MyToken from './components/MyToken/MyToken';
import { useTheme } from './hooks/useTheme';
import { AppContainer, Content, Footer, Link, MoonIcon, Navbar, SunIcon } from './app.styles';

const App = () => {
  const { currentTheme, toggleTheme } = useTheme();
  const routes = [
    <Route path="/greetings" component={Greeting} key="greeting" />,
    <Route path="/my-token" component={MyToken} key="my-token" />,
  ];

  return (
    <AppContainer>
      <ThemeProvider theme={currentTheme}>
        <Router>
          <Navbar>
            <Link key="/greetings" to="/greetings">
              Greetings
            </Link>
            <Link key="/my-token" to="/my-token">
              MyToken
            </Link>
            {currentTheme.theme === 'light' ? <MoonIcon onClick={toggleTheme} /> : <SunIcon onClick={toggleTheme} />}
          </Navbar>
          <Content>{routes.map(route => route)}</Content>
          <Footer />
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
