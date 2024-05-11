export default interface UserRepository {
    createUser(req: any, res: any, next: any) : Promise<void>

    deleteUser(req: any, res: any, next: any): Promise<void>

    updateUser(req: any, res: any, next: any): Promise<void>

    getAllUsers(req: any, res: any, next: any): Promise<void>

    getUserById(req: any, res: any, next: any): Promise<void>
}