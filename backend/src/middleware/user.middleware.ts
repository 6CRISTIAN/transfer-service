import { Request, Response, NextFunction } from "express"

export const validateUserSchema = (req: Request, res: Response, next: NextFunction): void => {
   true ? next() : res.status(400).send('Error en el esquema enviado.')
}