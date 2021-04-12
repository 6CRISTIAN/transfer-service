import express from "express";
import { createRecipient, retrieveRecipientList } from '../controllers/user.controller'

const router = express.Router()

router.post('/', createRecipient)
router.get('/', retrieveRecipientList)

export const UserRouter = router