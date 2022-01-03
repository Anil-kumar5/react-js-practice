import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
function RouterContainer() {
    return (
        <div>
            <BrowserRouter>
            <Route exact path = '/' component = {Page2}/>
            <Route exact path = '/first' component = {Page1}/>
            </BrowserRouter>
        </div>
    )
}

export default RouterContainer
