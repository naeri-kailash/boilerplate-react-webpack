import React from 'react'
import styleData from '../../data/styles.json'
import BeerStyles from './BeerStyles'

const App = React.createClass({
  render () {
    return (
      <div>
        <h1>Here is our extensive beer style menu</h1>
        <BeerStyles style={styleData.styles} />
        {this.props.children}
      </div>
    )
  }
})

export default App
