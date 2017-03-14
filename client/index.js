import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './components/App'
import BeerDetails from './Components/BeerDetails'
import BeerStyles from './Components/BeerStyles'

document.addEventListener('DOMContentLoaded', () => {
  render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/details/:id' component={BeerDetails} />
      </Router>
    ),
    document.getElementById('app')
  )
})
