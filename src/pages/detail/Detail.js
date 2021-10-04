import { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Error from '../../core/components/Error'
import Loading from '../../core/components/Loading'

import Actions from './Actions'
import Description from './Description'

export default function Detail() {
  const [phone, setPhone] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const findProduct = async () => {
      try {
        const res = await fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
        if (res.status !== 200) throw new Error()
        const p = await res.json()
        setPhone(p)
        setLoading(false)
      } catch (e) {
        setError(true)
        setLoading(false)
      }
    }

    findProduct()
  }, [id])

  if (loading) return <Loading />

  if (error) return <Error />

  return (
    <>
      {/* back link */}
      <div className="columns mb-4">
        <div className="column is-offset-4">
          <Link to="/phones">
            <span className="icon is-primary">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            Back to phone list
          </Link>
        </div>
      </div>

      {/* two columns side by side */}
      <div className="columns">
        <div className="column is-2 is-offset-4">
          <img src={phone.imgUrl} alt={`${phone.brand} ${phone.model}`} />
        </div>

        <div className="column">
          <Description {...phone} />
          <br />
          <Actions id={phone.id} options={phone.options} />
        </div>
      </div>
    </>
  )
}
