import React, {useState} from 'react';
import Home from './Home';
import Page from './Page';
import Quisom from './Qui-som';
import Header from './Header';
import { Route, withRouter, Redirect } from 'react-router-dom'
import './App.sass';

export default withRouter(function ({ history }) {
  const [state, setState] = useState({})

  const home = () => {
    history.push('/home');

    setState({ page: 'home' });
  }

  const quiSom = () => {
    history.push('/quisom');

    setState({ page: 'quiSom' });
  }

  const {page} = state
  return <>
    <Page clasName={page}>
      <Header goHome={home} goQuiSom={quiSom} />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" render={() => <Home/>} />
      <Route path="/quisom" render={() => <Quisom/>} />
    </Page>
  </>

})


