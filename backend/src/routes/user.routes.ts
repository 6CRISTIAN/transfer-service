import express from "express";
import { createRecipient, retrieveRecipientList } from '../controllers/user.controller'
import { validateUserSchema } from "../middleware/user.middleware";

const router = express.Router()

router.post('/', validateUserSchema, createRecipient)
router.get('/', retrieveRecipientList)

export const UserRouter = router