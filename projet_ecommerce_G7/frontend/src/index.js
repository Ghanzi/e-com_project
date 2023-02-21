import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom'
// const elem=React.createElement("h1",{},"Bonjour 4IIR G7M")

let p={"name":"Ahmed","age":20}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
            <BrowserRouter>
              <App/>
            </BrowserRouter>
           )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
