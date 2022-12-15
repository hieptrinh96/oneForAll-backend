import axios from 'axios'
import { Coin } from '../models/coin.js'

import { Coin } from '../models/coin.js'

const createCoin = async (req, res) => {
try {
  const coin = await Coin.create(req.body.data)

} catch(err) {
  res.status(500).json(err)
  }
}

export {
  createCoin
}