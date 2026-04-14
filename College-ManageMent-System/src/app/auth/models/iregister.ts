import { ILogin } from "./ilogin";

export interface IRegister extends ILogin {
    role: string;
    linkedId: number;
}
