import { Requestline } from "../requestline/requestline.class";
import { User } from "../user/user.class";

export class Request {

    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = "";
    deliveryMode: string = "";
    status: string = "";
    total: number = 0;

    userId: number = 0;
    user!: User;
    userUsername : string = "";

    requestLines!: Requestline[]
}