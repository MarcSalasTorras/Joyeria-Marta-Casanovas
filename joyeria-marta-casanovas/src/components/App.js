import React, {useState} from 'react';
import Home from './Home';
import Page from './Page';
import Quisom from './Qui-som';
import { Route, withRouter, Redirect } from 'react-router-dom'
import './App.sass';

export default withRouter(function ({ history }) {
  const [state, setState] = useState({})

  const quiSom = () => {
    history.push('/quisom');

    setState({ page: 'quiSom' });
    console.log('hola nono')
  }

  const {page} = state
  return <>
    <Page clasName={page}>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" render={() => <Home goQuiSom={quiSom} />} />
      <Route path="/quisom" render={() => <Quisom/>} />
    </Page>
  </>

})


