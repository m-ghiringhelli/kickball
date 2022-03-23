import './App.css';
import { getTeams } from './services/teams.js';
import Teams from './views/Teams/Teams';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Portland Kickball</h1>
        <Switch>
          <Route exact path='/'>
            <Teams />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
