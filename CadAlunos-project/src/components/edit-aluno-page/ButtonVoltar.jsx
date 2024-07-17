// import React from 'react'
import PropTypes from 'prop-types'
import styles from './ButtonVoltar.module.css'

export const ButtonVoltar = ({type, children}) => {
  return (
    <button className={styles.button_btnVoltar} type={type}>{children}</button>
  )
}

ButtonVoltar.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}  