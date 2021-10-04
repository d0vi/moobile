import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="columns is-vcentered is-multiline">
        <div className="column is-full-tablet is-one-third-desktop is-flex is-justify-content-center">
          <Link to="/">
            <img src={logo} alt="I'm a cow, mooo!" height="28" width="60" />
            <strong>moobile</strong>
          </Link>
        </div>

        <div className="column is-full-tablet is-one-third-desktop">
          <p className="has-text-centered">
            The source code is licensed under the <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          </p>
        </div>

        <div className="column is-full-tablet is-one-third-desktop">
          <p className="is-size-7 has-text-centered">Subscribe to receive occasional product updates</p>
          <div className="field is-horizontal is-grouped is-flex is-justify-content-center">
            <p className="control">
              <input className="input is-primary is-small" type="text" placeholder="info@example.com" />
            </p>
            <p className="control">
              <button type="button" className="button is-primary is-small">
                Subscribe
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
