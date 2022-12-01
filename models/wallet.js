import mongoose from "mongoose";

const Schema = mongoose.Schema

const walletSchema = new Schema({
  coinName: {
    type: String
  },
  
})

const Wallet = mongoose.model("Wallet", walletSchema)

export { Wallet }