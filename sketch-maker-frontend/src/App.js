
import './App.css';
import Sketch from './components/sketch'
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
          {/* <Route path="sketches" /> */}
          {/* <Route path="sketches/new" /> */}
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
