import React from 'react';
import './app.less'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main/Main";

const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
              <Routes>
                <Route path="/" element={<Main />} exact/>
              </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;