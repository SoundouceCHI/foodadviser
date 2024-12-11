import React from 'react'
import foodAdviserLogo from '../../assets/foodAdviser_logo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import youtube from './assets/youtube.png';
import './Footer.css';


export default function Footer() {
  return (
    <div className='footer'>
      <img src = {foodAdviserLogo} alt='foodAdviserLogo' />
      <div className='row'>
          <div className='col'>
            <p>Mentions Légales</p>
          </div>
          <div className='col'>
            <p>Politique de Confidentialités</p>
          </div>
      </div>

      <div className='row'>
          <img src = {instagram} alt='' />
          <img src = {youtube} alt='' />
          <img src = {facebook} alt='' />
      </div>
    </div>
  )
}
