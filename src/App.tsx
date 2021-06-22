import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import Faq from './Components/Faq';
import Gallery from './Components/Gallery';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from './Table/Table'


function App() {
  return (       
      <Router>
        <React.Fragment>
          <Header />
          <div className="wrapper">
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/Table"} exact component={Table} />
              <Route path={"/Gallery"} exact component={Gallery} />
              <Route path={"/FAQ"} exact component={Faq} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>         
  );
}

export default App;
