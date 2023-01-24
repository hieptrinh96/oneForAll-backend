import { Coin } from '../models/coin.js'
import { Profile } from '../models/profile.js'

const createCoin = async (req, res) => {
try {
  req.body.owner = req.user.profile
  const coin = await Coin.create(req.body)
  const profile = await Profile.findByIdAndUpdate(
    req.user.profile,
    { $push: { coins: coin }},
    { new: true }
  )
  coin.owner = profile
  res.status(201).json(coin)
} catch(err) {
  console.log(err)
  res.status(500).json(err)
  }
}

export {
  createCoin
}