import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import './App.less';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
