import React from 'react';
import './app.less'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";

const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
              <Routes>
                <Route path="/" element={<Main />} exact/>
                <Route path="/card" element={<Card />}/>
                <Route path="*" element={<div>Page not found</div>} />
              </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;