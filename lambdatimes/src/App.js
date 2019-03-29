import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import { AppCont } from './components/StyledComponents';

const App = () => {
  return (
    <AppCont className="App">
      <TopBar />
      <Header />
      <Content />
    </AppCont>
  );
}

export default App;
