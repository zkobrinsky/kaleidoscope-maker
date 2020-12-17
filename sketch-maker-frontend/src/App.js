
import './App.css';
import Sketch from './components/Sketch'
import Sketches from './components/Sketches'
import CreateSketch from './components/CreateSketch'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <div className="App">
      <Router >
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
      {/* <div className="p5_sketch">
        < Sketch angle={0} rotateRate={0.5}/>
      </div> */}
      <Button variant="primary">Bootstrap button</Button>{' '}
    </div>
  );
}

export default App;
