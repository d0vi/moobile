import { useContext } from 'react'

import { Link } from 'react-router-dom'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CartContext } from '../context/CartContext'

import Breadcrumb from './Breadcrumbs'

import logo from '../../assets/images/logo.png'

export default function Header() {
  const { count } = useContext(CartContext)

  return (
    <nav className="navbar is-transparent is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/phones">
          <img src={logo} alt="moobile is the best smartphone marketplace" />
        </Link>
        <Link className="navbar-item has-text-weight-bold is-size-4" to="/phones">
          moobile
        </Link>
        <div className="navbar-item">
          <Breadcrumb />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped has-text-white">
              <p className="control">
                <span className="icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
              </p>
              <p>{count}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
