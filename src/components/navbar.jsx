import React from 'react'
import './nav.css'
import Body from './Body.jsx'
import Service from './service.jsx'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-scroll'


function Navbar() {
  const handleSetActive = (to) => { console.log(to); };
 

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();


  return (
    <div>
      <div className='nav'>
      <Link
            className='navli'
            activeClass="active"
            to="ppp"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
        <span className='logo button2'>MEMORY HURDLE</span>
        </Link>
        <ul className='navul'>
        <Link
            className='navli button2'
            activeClass="active"
            to="nav"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            Home
          </Link>
        <Link
            className='navli button2'
            activeClass="active"
            to="b2"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            About us
          </Link>
         
        <Link
            className='navli button2'
            activeClass="active"
            to="b3"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            Play-ground
          </Link>
         
        <Link
            className='navli button2'
            activeClass="active"
            to="b4"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            Testimonial
          </Link>
       
         
        <Link
            className='navli button2'
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            Contact us
          </Link>
       
       
        </ul>
        <div className="bu">

          <li className='log'> {isAuthenticated && <p className='g1'> {user.name} </p>}</li>
          {isAuthenticated ? (<button className='navl' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            LogOut
          </button>) : (

            <button className='navl2' onClick={() => loginWithRedirect()}>LogIn</button>
          )}

        </div>

      </div>

      <Body />
      <Service />

    </div>
  )
}

export default Navbar
