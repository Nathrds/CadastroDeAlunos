import PropTypes from 'prop-types'

export const LoginButton = ({type, children}) => {
  return (
    <button type={type}>{children}</button>
  )
}

LoginButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
