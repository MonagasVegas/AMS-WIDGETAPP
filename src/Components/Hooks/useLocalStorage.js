
import React from 'react'
import { LocalStorageContext } from '../Context/localStorageContext'

const useLocalStorage = () => {
  const data = React.useContext(LocalStorageContext)
  console.log(data)
  return data
}

export default useLocalStorage
