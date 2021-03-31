import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Detail, Home, Latest, Popular, Search } from './screens';
import './app.css'

const App: FC = () => {

  return (

    <Router>
      {/* <div className="pages"> */}
      <Switch>
        <Route path='/latest' component={Latest} />
        <Route path='/popular' component={Popular} />
        <Route path='/search' component={Search} />
        <Route path='/movie_id' component={Detail} />
        <Route exact path='/' component={Home} />
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
