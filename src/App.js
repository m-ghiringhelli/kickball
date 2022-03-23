import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Teams from './views/Teams/Teams';
import TeamDetail from './views/Teams/TeamDetail';
import Players from './views/Players/Players';
import Header from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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
          <Route path='/players'>
            <Players />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
