import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react"
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import { BrowserRouter as Router , Switch, Route, Redirect } from 'react-router-dom';
import MemberArea from './containers/MemberArea/MemberArea';
import ScrolltoTop from './components/ScrolltoTop';
function App() {
  const [UserData, setUserData] = useState(0)
  useEffect(() => {
      if (UserData?.user?.id === undefined) {
        setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
      }
  })

  return (
    
        <Router>
            <ScrolltoTop />
          <Switch>
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
