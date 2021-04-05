import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Detail, Home, Latest, Popular, Search } from './screens';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

const App: FC = () => {

  return (

    <main>
      {/* <div className="pages"> */}
      <Switch>
        <Route path='/latest' component={Latest} />
        <Route path='/popular' component={Popular} />
        <Route path='/search' component={Search} />
        <Route path='/movie/:id' component={Detail} />
        <Route exact path='/' component={Home} />
      </Switch>
      {/* </div> */}
    </main>

  );
}

export default App;
