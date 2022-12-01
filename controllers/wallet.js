import { Wallet } from "../models/wallet";
import { Profile } from "../models/profile";

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