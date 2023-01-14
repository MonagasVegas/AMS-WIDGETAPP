import axios from 'axios'
import { urlFetch } from '../constants'

export const getProductsById = (id) => {
  return axios({
    method: 'GET',
    url: `${urlFetch}api/product/${id}`
  })
}
