import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './Home.jsx';
import Navbar from './Navbar';
import About from './About.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Lottie from 'react-lottie';
import * as cycle from './json/cycle-animation.json'
import * as success from './json/success.json';

const logo = "https://i.ibb.co/4sZ6pd7/logo.png"
const bird1 = "https://i.ibb.co/c1ncXZf/bird1.png";
const bird2 = "https://i.ibb.co/JnNY4Fy/bird2.png";
const forest = "https://i.ibb.co/1J7GkVV/forest.png";
const rocks = "https://i.ibb.co/jwDcS34/rocks.png";
const water = "https://i.ibb.co/bvGmqsp/water.png";

const defaultOption1 = {
  loop: true,
  autoplay: true,
  animationData: cycle.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const defaultOption2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      fetch(bird1 || bird2 || forest || rocks || water || logo)
        .then((response) => response.ok)
        .then((outBuff) => {
          setData(outBuff);
          setLoading(true);
          setTimeout(() => {
            setCompleted(true);
          }, 1100);
        });
    }, 2000);
  }, [data]);
  return (
    <div className="App">
      { !completed ? (
        !loading ?
          <Lottie options={defaultOption1}
            style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} height={300}
            width={300} /> : <Lottie options={defaultOption2}
              style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} height={300}
              width={300} />
      ) : <div className="page">
          <BrowserRouter>
            <Navbar logo={logo} />
            <Switch>
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/project' component={Project} />
              <Route exact path='/about' component={About} />
              <Route exact path='/'>
                <Home bird1={bird1} bird2={bird2} forest={forest} rocks={rocks} water={water} />
              </Route>
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
      </div>
      }
    </div>
  )
}

export default App
