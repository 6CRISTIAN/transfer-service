import { TypeUser, User } from '../models/user.model';

export const createUser = async (user: TypeUser): Promise<TypeUser> => {
   const _user = await findUserByEmail(user?.email) || await findUserByRut(user?.rut)
   return _user ? _user : { alreadyExisted: true, ...User.create(user) }
}

export const retrieveUserList = async (): Promise<User[]> => User.findAll();

export const findUserByEmail = async (email: string): Promise<User | any> => {
   return User.findOne({ where: { email } })
}

export const findUserByRut = async (rut: number): Promise<User | any> => {
   return User.findOne({ where: { rut } })
}