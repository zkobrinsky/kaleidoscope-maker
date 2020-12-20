
import './App.css';
import Sketch from './components/Sketch'
import Sketches from './components/Sketches'
import CreateSketch from './components/CreateSketch'
import Nav from './components/Nav'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Button from 'react-bootstrap/Button';



function App() {
  return (
    <div className="App">
      <Router >
      <Nav />
        <Switch>
          <Route exact path="/"
          render={(props) => (
            <Sketch {...props} angle={0} rotateRate={0.5} />
          )} 
            />
          <Route exact path="/sketches" component={Sketches}/>
          <Route exact path="/sketches/new" component={CreateSketch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
