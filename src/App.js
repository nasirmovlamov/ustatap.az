import './App.css';

import React from "react"
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import { BrowserRouter as Router , Switch, Route, Redirect } from 'react-router-dom';
import MemberArea from './containers/MemberArea/MemberArea';
function App() {
  const loginId = 3
  return (
    
        <Router>
          <Switch>
            

            <Route  path={`/member-area/`}>
                  <MemberArea loginId={loginId}/>
            </Route>
            <Route  path="/">
              <div className="topContainer">
                    <Header/>
              </div>
            </Route>

            <Route path="*">
              404
            </Route>
            
          </Switch>
        </Router>
  );
}

export default App;
