import React from 'react'
import { Link } from 'react-router-dom';
import Works from './Works'

export default function Platon() {
  return (
    <div>
      <h1>Le challenge.</h1>
      <p>Platon a décidé de se lancer à l'époque malgré une crise économique difficile.</p>  
      <p>Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.</p>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/works" className="btn-bg-purple btn-small">
          Retour
        </Link>
      </div>
      </div>  
  )
}
