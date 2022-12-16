import { Router } from "express";
import * as coinCtrl from '../controllers/coin.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router()

router.post('/', checkAuth, coinCtrl.createCoin)


export { router } 