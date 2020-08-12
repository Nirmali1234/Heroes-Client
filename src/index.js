import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Heroes from "./components/Heroes";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import HeroDetails from "./components/HeroDetails";

//let firstElement = <h1>Hello World!!!</h1>;

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    {/* <Heroes /> */}
    <Route exact path="/" component={Home}/>
    <Route exact path="/heroes" component={Heroes}/>
    <Route exact path="/heroes/:id" component={HeroDetails}/>
  </BrowserRouter>,
  document.getElementById("root")
);

























// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
