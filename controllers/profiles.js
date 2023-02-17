import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'
import { Coin } from '../models/coin.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function showMyCoins(req, res) {
  Profile.find({}).then((profiles) => {
    Profile.findById(req.params.id).populate('coins').then((profile) => {
      Coin.find({ owner: profile._id}).then((coin) => {
        res.status(200).json(coin)
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json(error)
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json(error)
    })
  })
}

function deleteCoin(req, res) {
  Profile.findById(req.params.id).then(profile => {
    Coin.findByIdAndDelete(req.params.id).then(coin => {
      profile.coins.remove({ _id: req.params.id })
      profile.save()
      res.status(200).json(coin)
    }).catch((error) => {
      console.log(error)
      res.status(500).json(error)
    })
  })
  .catch((error) => {
    console.log(error)
    res.status(500).json(error)
  })
}

export { 
  index, 
  showMyCoins,
  deleteCoin as delete 
}
