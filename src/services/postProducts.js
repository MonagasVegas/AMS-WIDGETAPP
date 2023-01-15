import axios from 'axios'
import { urlFetch } from '../constants'

export const postProducts = (body) => {
  return axios({
    method: 'POST',
    url: `${urlFetch}api/cart`,
    data: body
  })
}
