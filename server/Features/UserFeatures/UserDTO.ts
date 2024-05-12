export class UserDTO {
    UserId: string = "";
    UserFullName: string = "";
    UserNickname: string = "";
    UserPassword: string = "";
    UserAge: number = 0;
    UserType: string = "";
    UserStatus: string = "";

    constructor() {
    }

    checkPasswordLen(): boolean {
        return !!(this.UserPassword && this.UserPassword.length >= 6);
    }

    // Outros métodos de validação
}