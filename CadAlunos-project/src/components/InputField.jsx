import PropTypes from 'prop-types'

export const InputField = ( {label, name, type, register, error} ) => {
  return (
    <div>
        <label>{label}</label>
        <input 
            type={type}
            name={name}
            {...register(name)} 
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
