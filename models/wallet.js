import mongoose from "mongoose";

const Schema = mongoose.Schema

const walletSchema = new Schema({
  coins: []
})

const Wallet = mongoose.model("Wallet", walletSchema)

export { Wallet }