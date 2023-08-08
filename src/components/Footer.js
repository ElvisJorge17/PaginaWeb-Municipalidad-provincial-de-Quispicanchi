import React from 'react';
import facebook from '../images/Logo-Redes/facebook.png'
import '../components/Style/Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Municipalidad Provincial de Quispicanchi Gestion 2023- 2026
        </p>
        <p className='footer-subscription-text'>
          Jr. César Vallejo Nro. 109, Plaza de Armas de Urcos, Quispicanchi
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div> */}
          <div class='footer-link-items'>
            <h2>Contacto</h2>
            <Link to='/'>Correo electrónico:</Link>
            <Link to='/'>muniquispicanchi2023.2026@gmail.com</Link>
            <Link to='/'>Teléfono: 993421451</Link>
            <Link to='/'>Urcos - Perú</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Teléfonos Quispicanchi</h2>
            <Link to='/'>Centro de Salud Urcos: 084 307076</Link>
            <Link to='/'>Compañía de Bomberos: 084 307105.</Link>
            <Link to='/'>PNP Quispicanchi: 084- 307021</Link>
            <Link to='/'>Essalud: 084 307015.</Link>
            <Link to='/'>Seguridad Ciudadana. 941 414773</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes sociales</h2>
            <a href="https://www.facebook.com/profile.php?id=100088963969826" target="_blank" rel="noopener noreferrer">
            Facebook
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088963969826" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="pte" width={50} />
            </a>
          </div>
        </div>
      </div>
      {/* <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              EJ
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Footer;
