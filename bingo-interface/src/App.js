import React from 'react';
import BingoHome from './components/BingoHome/BingoHome';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" component={BingoHome} exact/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
