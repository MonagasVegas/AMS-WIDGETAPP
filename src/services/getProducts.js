import axios from 'axios'
import { urlFetch } from '../constants'

export const getProducts = (product) => {
  return axios({
    method: 'GET',
    url: `${urlFetch}api/product`
  })
}
