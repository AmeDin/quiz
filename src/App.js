import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import PrivateRoute from './PrivateRoute';
import MaiTimeSequence from './components/MaiTimeSequence';
import HiddenPageHookMairah from './components/HiddenPageHookMairah';

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
      </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
