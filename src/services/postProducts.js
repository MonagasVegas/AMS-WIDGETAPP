import axios from 'axios'
import { urlFetch } from '../constants'

export const postProducts = (id) => {
  return axios({
    method: 'POS',
    url: `${urlFetch}api/cart`
  })
}
