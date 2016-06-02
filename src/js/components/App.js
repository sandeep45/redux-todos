import React from 'react';

import NavigationLinks from './NavigationLinks.js'
import TodoCount from '../containers/TodoCount.js'

const App = (props) => {
  return(
    <div className="container">

      <NavigationLinks />

      <TodoCount />

      <hr />

      {props.children}

      <hr />

    </div>
  )
}

export default App

