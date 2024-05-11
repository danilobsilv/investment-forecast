import mongoose from "mongoose";
import { UserDTO } from "./UserDTO"
import type UserRepository from "./UserRepository"
import UserModel from "./UserModel";


export default class UserService implements UserRepository {
    async createUser(req: any, res: any, next: any): Promise<void> {
        try{

            const userDTO = new UserDTO();
            userDTO.UserFullName = req.body.UserFullName;
            userDTO.UserNickname = req.body.UserNickname;
            userDTO.UserPassword = req.body.UserPassword;
            userDTO.UserAge = req.body.UserAge;
            userDTO.UserType = req.body.UserType;
            userDTO.UserStatus = req.body.UserStatus;

            console.log(userDTO);

            const newUser = await UserModel.create(userDTO)
            return res.status(201).json({newUser, message: "User successfully created."})
        }
        catch (error:any){
            console.log("erro na aplicação: " + error.message);
            return res.status(501).json({Error: "Error creating user: " + error.message});
        }
    }

    async deleteUser(req: any, res: any, next: any): Promise<void> {
    }

    async getAllUsers(req: any, res: any, next: any): Promise<void> {
    }

    async getUserById(req: any, res: any, next: any): Promise<void> {
    }

    async updateUser(req: any, res: any, next: any): Promise<void> {
    }
}