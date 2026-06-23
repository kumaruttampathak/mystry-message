import { Message } from "@/model/User";

export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessage?: boolean; // optional coz we don't need this for signup
    messages?: Array<Message>
}