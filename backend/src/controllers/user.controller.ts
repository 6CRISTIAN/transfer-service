import { Request, Response } from "express"
import { messages } from "../utils/constants"
import { createUser, retrieveUserList } from '../services/user.service'

export const createRecipient = async (req: Request, res: Response) => {
   try {
      const recipient = await createUser(req.body)
      res.status((recipient.isNewRecord) ? 200 : 201).json(recipient)
   } catch (err) {
      res.status(err.code || 500).json({ message: err.message || messages.internalErr })
   }
}

export const retrieveRecipientList = async (req: Request, res: Response) => {
   try {
      const recipientList = await retrieveUserList()
      res.status(200).json(recipientList)
   } catch (err) {
      res.status(err.code || 500).json({ message: err.message || messages.internalErr })
   }
}