import PropTypes from 'prop-types'
import styles from './Button.module.css'

export const Button = ({type, children}) => {
  return (
      <button className={styles.loginButton_btn} type={type}>{children}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
