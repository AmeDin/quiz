import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import PrivateRoute from './PrivateRoute';
import MaiTimeSequence from './components/MaiTimeSequence';
import HiddenPageHookMairah from './components/HiddenPageHookMairah';
import HiddenPageMairahPt2 from './components/HiddenPageMairahPt2';
import HiddenPageMairahFinal from './components/HiddenPageMairahFinal';
import MairahEpilogue from './components/MairahEpilogue';

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <div className="App"> 
    
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
          <Route exact path="/" component={MaiTimeSequence} />
          <PrivateRoute path="/hidden" component={HiddenPageHookMairah} />
          <Route exact path="/part2" component={HiddenPageMairahPt2} />
          <Route exact path="/final" component={HiddenPageMairahFinal} />
          <Route exact path="/epi" component={MairahEpilogue} />
      </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
