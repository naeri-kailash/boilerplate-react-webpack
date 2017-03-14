import React from 'react'
import {Link} from 'react-router'

const BeerStyles = props => {
  return (
    <ul>
      { props.style.map(beerInfo => (
        <li key={beerInfo.id}><Link to='/detail'>{beerInfo.name}</Link></li>
      ))}
    </ul>
  )
}

export default BeerStyles
