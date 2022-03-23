import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Teams from './views/Teams/Teams';
import TeamDetail from './views/Teams/TeamDetail';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Portland Kickball</h1>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/teams/:id'>
            <TeamDetail />
          </Route>
          <Route path='/teams'>
            <Teams />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
