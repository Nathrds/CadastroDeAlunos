import PropTypes from 'prop-types'
import styles from './LoginButton.module.css'

export const LoginButton = ({type, children}) => {
  return (
      <button className={styles.loginButton_btn} type={type}>{children}</button>
  )
}

LoginButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
