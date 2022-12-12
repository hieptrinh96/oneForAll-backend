import { Router } from "express";
import * as coinCtrl from '../controllers/coin.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth";

const router = Router()

export { router }