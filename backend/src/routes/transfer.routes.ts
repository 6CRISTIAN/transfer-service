import express from "express";
import { processTransfer, retrieveTransferList } from "../controllers/tranfer.controller";

const router = express.Router()

router.post('/', processTransfer)
router.get('/', retrieveTransferList)

export const TransferRouter = router