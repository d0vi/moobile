import { useContext, useState } from 'react'

import PropTypes from 'prop-types'

import { CartContext } from '../../core/context/CartContext'

function Actions({ id, options }) {
  const { count, setCount } = useContext(CartContext)

  const [choices, setChoices] = useState({
    color: Array.isArray(options.colors) ? options.colors[0].code : '',
    storage: Array.isArray(options.storages) ? options.storages[0].code : '',
  })

  const addToCart = () => {
    fetch('https://front-test-api.herokuapp.com/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, colorCode: choices.color, storageCode: choices.storage }),
    })
      .then(res => {
        if (res.status !== 200) throw new Error()
        return res.json()
      })
      .then(res => setCount(res.count))
      .catch(() => setCount(count + 1))
  }

  const handleOptionChange = e => {
    const { name, value } = e.target
    setChoices({
      ...choices,
      [name]: value,
    })
  }

  return (
    <>
      <div className="field">
        <label className="label is-small">Storage</label>
        <div className="control">
          <div className="select is-rounded is-primary is-small">
            <select name="storage" value={choices.storage} onChange={handleOptionChange}>
              {options.storages &&
                options.storages.map(s => (
                  <option key={s.code} value={s.code}>
                    {s.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label is-small">Color</label>
        <div className="field-body">
          <div className="control">
            <div className="select is-rounded is-primary is-small">
              <select name="color" value={choices.color} onChange={handleOptionChange}>
                {options.colors &&
                  options.colors.map(c => (
                    <option key={c.code} value={c.code}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="button mt-2 is-primary" onClick={addToCart}>
        Add to cart
      </button>
    </>
  )
}

Actions.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.array).isRequired,
}

export default Actions
