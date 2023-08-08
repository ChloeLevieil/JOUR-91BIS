import React from 'react';
import queen from '../queen.png';
import paon from '../paon.png'
import kings from '../kings.png'
import { Link } from 'react-router-dom';

export default function CardsWorks() {
  return (
    <div className='cards-container'>
      <div className='card'>
        <img src={queen} className='img-card' alt="Bienvenue sur le site de l'agence MJ Agency" />
        <p className='title-project'>Le challenge</p>
        <p>Platon a décidé de se lancer à l'époque malgré une crise économique difficile.</p>  
        <p>Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence. &#128129;</p>
        <Link to="/platon" className="btn-bg-purple btn-small">
          Voir le projet
        </Link>
      </div>

      <div className='card'>
        <img src={paon} className='img-card' alt="Bienvenue sur le site de l'agence MJ Agency" />
        <p className='title-project'>Solane est le premier vendeur de fraises du Poitou-Charentes</p>
        <p>Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.</p>
        <Link to="/sedal" className="btn-bg-purple btn-small">
          Voir le projet
        </Link>
      </div>

      <div className='card'>
        <img src={kings} className='img-card' alt="Bienvenue sur le site de l'agence MJ Agency" />
        <p className='title-project'>Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas</p>
        <p>Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".</p>
        <Link to="/solane" className="btn-bg-purple btn-small">
          Voir le projet
        </Link>
      </div>
    </div>
  );
}