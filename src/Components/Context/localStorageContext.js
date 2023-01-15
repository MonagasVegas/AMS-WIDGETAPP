import React, { createContext, useEffect, useState } from 'react'
import { getProducts } from '../../services/getProducts'

/** Capa de permanencia. */

export const LocalStorageContext = createContext({})

// eslint-disable-next-line react/prop-types
export const LocalStorageProvider = ({ children }) => {
  const [products, setProducts] = useState()

  /**
    * Cada hora se consulta el API de todos los productos. 1hr = 3600000ms
   */
  useEffect(() => {
    if (!window.localStorage.getItem('@products')) {
      productFetch()
    }
    setTimeout(() => {
      productFetch()
      console.log('Acabo de consultar.')
    }, 3600000)
  }, [products])

  /**
     * Consulta de productos All
     * @param {*} newItem
     */
  const productFetch = async () => {
    const res = await getProducts()
    const response = res.data
    setProducts(response)
    window.localStorage.setItem('@products', JSON.stringify(response))
  }

  /**
     * Funcion que permite guardar datos.
     * @param {*} store
     * @param {*} item
     */
  const saveItem = (storage, item) => {
    const stringifiedItem = JSON.stringify(item)
    window.localStorage.setItem(storage, stringifiedItem)
  }

  /**
     * Funcion que permite obtener la data de un storage.
     * @param {*} storage
     */
  const getStorage = (storage) => {
    return window.localStorage.getItem(storage)
  }

  /**
     * Funcion que permite crear la data de un storage.
     * @param {*} storage
     * @param {*} initialValue
     */
  const createStorage = (storage, initialValue) => {
    const data = window.localStorage.getItem(storage)
    if (!data) {
      window.localStorage.setItem(storage, initialValue)
    }
  }

  return (
    <LocalStorageContext.Provider value={{ saveItem, getStorage, createStorage }}>
      {children}
    </LocalStorageContext.Provider>
  )
}
