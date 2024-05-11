import UserService from "./UserService"

export const UserController = {
    createUser: new UserService().createUser,

    deleteUser: new UserService().deleteUser,

    updateUser: new UserService().updateUser,

    getAllUsers: new UserService().getAllUsers,

    getUserById: new UserService().getUserById
}