import { NavLink } from 'react-router-dom'

import useBreadcrumbs from 'use-react-router-breadcrumbs'

import routes from '../../routes'

import { usePhones } from '../hook/usePhones'

export default function Breadcrumb() {
  const breadcrumbs = useBreadcrumbs(routes)

  const { phones } = usePhones()

  return (
    <nav className="breadcrumb is-small has-text-white" aria-label="breadcrumbs">
      <ul>
        {breadcrumbs.map(({ match, breadcrumb }) => {
          if (match.params.id && Array.isArray(phones)) {
            const phone = phones.find(p => p.id === match.params.id)
            if (phone)
              return (
                <li key={match.url}>
                  <NavLink className="has-text-weight-bold has-text-white" to={match.url}>
                    {phone.brand} {phone.model}
                  </NavLink>
                </li>
              )
          }
          return (
            <li key={match.url}>
              <NavLink className="has-text-weight-bold has-text-white" to={match.url}>
                {breadcrumb}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
