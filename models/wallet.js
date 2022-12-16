import mongoose from "mongoose";

const Schema = mongoose.Schema

const walletSchema = new Schema({
  coins: [{ type: Schema.Types.ObjectId, ref: 'Coin' }]
})

const Wallet = mongoose.model("Wallet", walletSchema)

export { Wallet }