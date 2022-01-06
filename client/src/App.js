import Home from "./page/home/Home";
import TopBar from "./components/topbar/Topbar";
import Single from "./page/single/Single";
import Write from "./page/wirte/Write";
import Setting from "./page/settings/Setting";
import Login from "./page/login/Login";
import Register from "./page/register/Register";

import React, { Component, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Context } from "./context/Context";
// import Post from "./components/post/Post";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar/>
      <Switch>

        <Route exact path="/"> 
        <Home/>
        </Route>

        <Route path="/register"> 
        {user ? <Home/> : <Register/>}
        </Route>
        
        <Route path="/login"> 
        {user ? <Home/> : <Login/>}
        </Route>

        <Route path="/write"> 
        {user ? <Write/> : <Register/>}
        </Route>

        <Route path="/settings"> 
        {user ? <Setting/> : <Register/>}
        </Route>

        <Route path="/post/:postId"> 
        <Single/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
