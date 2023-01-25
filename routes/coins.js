import { Router } from "express";
import * as coinCtrl from '../controllers/coins.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router()

router.use(decodeUserFromToken)

router.post('/', checkAuth, coinCtrl.createCoin)


export { router } 