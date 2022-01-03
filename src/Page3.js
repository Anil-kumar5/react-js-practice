import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
function Page3() {
    return (
        <div>
          <BrowserRouter>
          <Route exact path='/third' component={Page3}/>
          </BrowserRouter>  
          v jhvm,jhyuk
        </div>
    )
}

export default Page3
