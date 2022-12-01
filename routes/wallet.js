import { Router } from "express";
import * as walletCtrl from '../controllers/wallet.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth";

const router = Router()

export {router}