import PropTypes from 'prop-types'

function Preview({ imgUrl, brand, model, price }) {
  return (
    <div className="card">
      <div className="card-image is-flex is-justify-content-center pt-4">
        <img src={imgUrl} alt={`${brand} ${model}`} />
      </div>
      <div className="card-content">
        <div className="content">
          {brand} {model}
          <p className="is-size-5 has-text-primary">
            <strong>{price ? `${price}€` : 'Out of stock'}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

Preview.defaultProps = {
  price: 0,
}

Preview.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string,
}

export default Preview
