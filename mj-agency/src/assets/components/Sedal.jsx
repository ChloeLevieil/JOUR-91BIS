import React from 'react'
import { Link } from 'react-router-dom';
import Works from './Works'

export default function Sedal() {
  return (
    <div>
      <h1>Solane est le premier vendeur de fraises du Poitou-Charentes.</h1>
      <p>Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.</p>  
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/works" className="btn-bg-purple btn-small">
          Retour
        </Link>
      </div>
    </div>
  )
}
