import express from "express";
import { retrieveBankAccountTypeList } from "../controllers/bank-account-type.controller";

const router = express.Router()

router.get('/', retrieveBankAccountTypeList)

export const BankAccountTypeRouter = router