import React from 'react';
import { Link } from 'react-router-dom';
import imgheader from '../header.png';

export default function ImgHeader() {
  return (
    <div className="img-header-container">
      <div className="img-header-content">
        <div className="position-relative">
          <img src={imgheader} alt="Bienvenue sur le site de l'agence MJ Agency" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="text-overlay">
          <div className='text-with-shadow'>
            <h1 className='title-header'>Bienvenue dans notre agence MJ Agency</h1>
            <p className='pb-2'>Une agence super bidon !</p>
          </div>
          <Link to="/works" className="btn-bg-purple btn-small p-2">
            Voir nos supers projets
          </Link>
        </div>
      </div>
    </div>
  );
}