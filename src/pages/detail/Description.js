import PropTypes from 'prop-types'

function Description({
  brand,
  model,
  price,
  cpu,
  ram,
  os,
  displayResolution,
  battery,
  cammera,
  primaryCamera,
  secondaryCmera,
  dimentions,
  weight,
}) {
  return (
    <>
      <h4 className="is-size-3">
        {brand} {model}
      </h4>
      <ul>
        <li className="has-text-primary is-size-4">{price ? `${price}€` : 'Out of stock'}</li>
        <li>{cpu}</li>
        <li>{ram}</li>
        <li>{os}</li>
        <li>{displayResolution}</li>
        <li>{battery}</li>
        <li>{cammera}</li>
        <li>
          {primaryCamera[0]} {primaryCamera[1]}
        </li>
        {secondaryCmera && Array.isArray(secondaryCmera) ? (
          <li>
            {secondaryCmera[0]} {secondaryCmera[1]}
          </li>
        ) : (
          <li>{secondaryCmera}</li>
        )}
        <li>{dimentions}</li>
        {weight && <li>{weight}g</li>}
      </ul>
    </>
  )
}

Description.defaultProps = {
  cammera: '',
  dimentions: '',
  weight: '',
}

Description.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cpu: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  os: PropTypes.string.isRequired,
  displayResolution: PropTypes.string.isRequired,
  battery: PropTypes.string.isRequired,
  cammera: PropTypes.oneOfType([PropTypes.string]),
  primaryCamera: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  secondaryCmera: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  dimentions: PropTypes.string,
  weight: PropTypes.string,
}

export default Description
