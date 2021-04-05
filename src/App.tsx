import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Detail, Home, NowPlaying, Popular, Search } from './screens';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

const App: FC = () => {

  return (

    <main>
      {/* <div className="pages"> */}
      <Router>
        <Switch>
          <Route path='/now_playing' component={NowPlaying} />
          <Route path='/popular' component={Popular} />
          <Route path='/search' component={Search} />
          <Route path='/movie/:id' component={Detail} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      {/* </div> */}
    </main>

  );
}

export default App;
