import { Wallet } from "../models/wallet.js";
import { Profile } from "../models/profile.js";

const index = async (req, res) => {
  try {
    const crypto = await Wallet.find({})
    res.status(200).json(crypto)
  } catch (err) {
    res.status(500).json(err)
  }
}

export {
  index
}