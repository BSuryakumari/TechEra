import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import CourseDetails from '../CourseDetails'
import NotFound from '../NotFound'

import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/course/:id" component={CourseDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App 