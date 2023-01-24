import axios from 'axios'
import { Coin } from '../models/coin.js'

const createCoin = async (req, res) => {
try {
  const coin = await Coin.create(req.body)
  res.status(201).json(coin)
} catch(err) {
  res.status(500).json(err)
  }
}

export {
  createCoin
}