import React, { Children } from 'react'

export const LoginButton = ({ type, chieldren}) => {
  return (
    <button type={type}>{chieldren}</button>
  )
}
