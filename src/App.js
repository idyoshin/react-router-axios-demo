import React from 'react';
import {List} from './List';
import {ViewSingle} from "./ViewSingle"
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">

    {
      // Объявлем место где будут выводится наши компоненты под маршруты (Route) 
    }


    <Router>


    {

      // Навигации
    }
      <div>

        <Link to="/list"> List </Link>

      </div>




      {

        // Вывод приложения
      }


        <Route path="/list" exact component={List}></Route>
      
        <Route path="/single/:id" exact component={ViewSingle}></Route>
      
      </Router>
    </div>
  );
}

export default App;
