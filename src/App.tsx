import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Detail, Home, Latest, Popular, Search } from './screens';

const App: FC = () => {

  return (

    <Router>
      <Switch>
        <Route path='/latest' component={Latest} />
        <Route path='popular' component={Popular} />
        <Route path='/search' component={Search} />
        <Route path='/movie_id' component={Detail} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
