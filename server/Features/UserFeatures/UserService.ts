import { UserDTO } from "./UserDTO"
import type UserRepository from "./UserRepository"
import UserModel from "./UserModel";
import CustomError from "../../Middleware/ErrorHandler" 
import mongoose from "mongoose";

export default class UserService implements UserRepository {
    async createUser(req: any, res: any, next: any): Promise<void> {
        try {

            const userDTO = new UserDTO();

            userDTO.UserId = req.body.UserId;
            userDTO.UserFullName = req.body.UserFullName;
            userDTO.UserNickname = req.body.UserNickname;
            userDTO.UserPassword = req.body.UserPassword;
            userDTO.UserAge = req.body.UserAge;
            userDTO.UserType = req.body.UserType;
            userDTO.UserStatus = req.body.UserStatus;

            const newUser = await UserModel.create(userDTO);

            return res.status(201).json({ newUser, message: "User successfully created." });

        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({ Error: error.message });
        }
    }


    async deleteUser(req: any, res: any, next: any): Promise<void> {
       try {
           const userId = req.params.userId;

           if (!mongoose.Types.ObjectId.isValid(userId)) {
               return res.status(400).json({msg:"Invalid User Id"})
           }

           const user = await UserModel.findById(userId)

           if (!user){
               return res.status(404).json({msg: "User Not Found"})
           }
           const deletedUser = await UserModel.findByIdAndDelete(userId)

           return res.status(204).json({ user: deletedUser, msg: "User Successfully Deleted" });

       }
       catch(error: any){
           console.log("Error: ", error.message);
           return res.status(500).json({msg: error.message})
       }
    }

    async getAllUsers(req: any, res: any, next: any): Promise<void> {
        try{
            const users = await UserModel.find();

            if (!users){
                return res.status(404).json({msg: "There Are No Users"});
            }

            res.json(users);
        }
        catch(error: any){
            res.status(500).json({InternalServerError: error.message});
        }
    }

    async getUserById(req: any, res: any, next: any): Promise<void> {
    }

    async updateUser(req: any, res: any, next: any): Promise<void> {
    }
}