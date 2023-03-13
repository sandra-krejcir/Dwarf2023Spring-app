import axios from "axios";
import { Platform } from "react-native";
import { UsersEntity } from "./usersEntity";

export class UsersAPI {
    static baseUrl: string = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

    static async signup(user: UsersEntity) {
        try {
            const result = await axios.post("http://" + this.baseUrl + ':3003/auth/signup', user);
            return result.data;
        }
        catch(error) {
        }
    }

    static async login(user: UsersEntity) {
        // try {
            const result = await axios.post("http://" + this.baseUrl + ':3003/auth/login', user);
            
            return result.data;
        // }
        // catch(error: any) {
        //     // console.log("error", error.response.data);
        //     // console.log("error", error.response.status);
        //     // console.log("error", error.response.headers);
            
        //     if (error.response.status === 401) {
                
        //     }
        // }
    }
}