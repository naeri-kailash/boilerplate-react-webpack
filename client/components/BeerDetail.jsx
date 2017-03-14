import React from 'react'
import {Link} from 'react-router'

const BeerDetail = props => {
  const id = this.props.params.id
  return (
    <div>
      <ul key={beerInfo.id}>
        <li>{beerInfo.name}</li>
        <li>{beerInfo.shortName}</li>
        <li>{beerInfo.createDate}</li>
        <li>{beerInfo.description}</li>
      </ul>
      <Link to='/'>Back to beer styles</Link>
    </div>
  )
}

export default BeerDetail
