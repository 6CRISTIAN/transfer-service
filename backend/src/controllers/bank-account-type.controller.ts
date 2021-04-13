import { Request, Response } from "express";
import { getBankAccountTypeList } from "../services/bank-account-type.service";
import { messages } from "../utils/constants";

export const retrieveBankAccountTypeList = async (req: Request, res: Response) => {
   try {
      const bankAccountTypeList = await getBankAccountTypeList()
      res.status(200).json(bankAccountTypeList)
   } catch (err) {
      res.status(err.code || 500).json({ message: err.message || messages.internalErr })
   }
}