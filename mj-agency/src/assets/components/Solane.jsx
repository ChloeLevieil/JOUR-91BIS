import React from 'react'
import { Link } from 'react-router-dom';
import Works from './Works'

export default function Solane() {
  return (
    <div>
    <h1>Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas.</h1>
    <p>Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".</p>  
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/works" className="btn-bg-purple btn-small">
          Retour
        </Link>
      </div>
  </div>
  )
}
