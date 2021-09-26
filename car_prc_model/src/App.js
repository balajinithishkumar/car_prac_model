import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Check_mail from "./components/Check_mail";
import Auth from "./components/Auth";
import Pass_reset from "./components/Pass_reset";
import { auth } from "./components/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Result from "./components/Result";
function App() {
  const [user, setuser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((result) => {
      if (result) {
        setuser(result);
      } else {
        setuser(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        {user ? (
          <Switch>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        ) : (
          <>
            <Switch>
              <Route path="/checkmail">
                <Check_mail />
              </Route>
              <Route path="/resetpassword">
                <Pass_reset />
              </Route>
              <Route path="/">
                <Auth />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}
export default App;
