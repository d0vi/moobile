import { useState } from 'react'

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Error from '../../core/components/Error'
import Loading from '../../core/components/Loading'
import { usePhones } from '../../core/hook/usePhones'

import Preview from './Preview'

export default function List() {
  const [searchTerm, setSearchTerm] = useState('')

  const { phones, loading, error } = usePhones()

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
  }

  if (loading) return <Loading />

  if (error) return <Error />

  return (
    <>
      <div className="columns mb-4">
        <div className="column is-offset-9">
          <Search term={searchTerm} onChange={handleSearchChange} />
        </div>
      </div>
      <div className="columns is-multiline">
        {phones
          .filter(i => `${i.brand} ${i.model}`.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(i => (
            <div key={i.id} className="column is-one-third-tablet is-one-quarter-desktop">
              <Link to={`/phones/${i.id}`}>
                <Preview {...i} />
              </Link>
            </div>
          ))}
      </div>
    </>
  )
}

function Search({ term, onChange }) {
  return (
    <p className="control has-icons-left">
      <input
        type="text"
        className="input is-primary"
        value={term}
        onChange={onChange}
        placeholder="Search for a phone"
      />
      <span className="icon is-small is-left">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </p>
  )
}

Search.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
