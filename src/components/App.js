import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import DetailView from './detail-view/DetailView';
import './App.less';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail-view" component={DetailView} />
      </Switch>
    </div>
  );
}

export default App;
