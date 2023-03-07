import React from 'react'

import styles from './Input.module.css'

const Input = ({name, label, value, error, onChange}) => {

  return (
    <label>
      {label}
      <input className={error ? styles.error : ''} 
        type="text" 
        name={name} 
        value={value} 
        onChange={onChange} 
      />
    </label>
  )
}

export default Input;


