import mongoose from 'mongoose'

const Schema = mongoose.Schema

const coinSchema = new Schema({
  id: {type: String},
  rank: {type: String},
  symbol: {type: String},
  name: {type: String},
  priceUsd: {type: String},
  supply: {type: String},
  maxSupply: {type: String},
})