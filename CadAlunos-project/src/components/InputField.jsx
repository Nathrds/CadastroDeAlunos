import PropTypes from 'prop-types'
import styles from './InputField.module.css'

export const InputField = ( {label, name, type, register, error} ) => {
  return (
    <div className={styles.container_inputField}>
        <input className={styles.inputField_input}
            type={type}
            name={name}
            {...register(name)} 
            placeholder={label}
        />
        {error && <span> style={{ color: 'red' }} </span>}
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.string
}
