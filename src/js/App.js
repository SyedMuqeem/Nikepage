import React  from "react"
import Header1 from './screens/Header1';
import '../styles/nike.css';
import Header2 from './screens/Header2';
import Top from "./screens/Top"
import Login from './screens/Login';
import Footer from './screens/footer/Footer';
import Signup from './screens/Singup';
import Resetpass from './screens/Resetpass';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 



const App = () => {
 return (
          <Router>
            
            <div className="main">
                <div className="header">
                    <Header1 />
                    <Header2 />
                </div>
                <div className="body">
                  
                  <Top/>


                  <div className="allforms" >
                          
                          <Switch>
                            <Route exact path="/">
                              <Home />
                            </Route>
                            <Route path="/register">
                              <About />
                            </Route>
                            <Route path="/reset">
                              <Dashboard />
                            </Route>
                          </Switch>

                              {/* <div className="links">
                              <div className="links1">
                              <Link to="/">Login</Link>
                              </div>
                            
                              <div className="links1">
                              <Link to="/register">Register Account</Link>
                              </div>
                          
                              <div className="links1">
                              <Link to="/reset">Reset Password</Link>
                              </div>
                              </div> */}

                        </div>


                  {/* <Swapform title="login" /> */}

                </div>
                <div className="footer">
                  
                </div>
                  <Footer />
              </div>
            </Router>
 )};

 function Home() {
  return (
    <Login />
  );
}

function About() {
  return (
    <Signup />
  );
}

function Dashboard() {
  return (
    <Resetpass />
  );
}


export default App;
