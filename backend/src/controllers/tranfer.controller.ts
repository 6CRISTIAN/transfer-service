import { Request, Response } from "express";
import { createTransfer, getTransferList } from "../services/transfer.service";
import { messages } from "../utils/constants";

export const processTransfer = async (req: Request, res: Response) => {
   try {
      const transfer = await createTransfer(req.body)
      res.status(201).json(transfer)
   } catch (err) {
      res.status(err.code || 500).json({ message: err.message || messages.internalErr })
   }
}

export const retrieveTransferList = async (req: Request, res: Response) => {
   try {
      const transferList = await getTransferList()
      res.status(200).json(transferList)
   } catch (err) {
      res.status(err.code || 500).json({ message: err.message || messages.internalErr })
   }
}
