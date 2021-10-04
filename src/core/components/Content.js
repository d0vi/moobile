import PropTypes from 'prop-types'

function Content({ children }) {
  return <main className="container is-fluid mt-6 mb-6">{children}</main>
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
