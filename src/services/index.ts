import { CONFIG } from '../config'
import FetchRequest from '../utils/request'

export const limit = 10

export const request = new FetchRequest({
  prefix: `${CONFIG.API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
})
