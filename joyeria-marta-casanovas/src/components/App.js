import React, {useState} from 'react';
import Home from './Home';
import Page from './Page';
import Quisom from './Qui-som';
import './App.sass';

export default  ()  => {
  const [state] = useState({})


  const {page} = state
  return <>
    <Page clasName={page}>
      <Home/>
      <Quisom/>
    </Page>
  </>

}


