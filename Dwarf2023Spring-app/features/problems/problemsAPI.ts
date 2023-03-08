import axios from "axios";
import { Platform } from "react-native";
import { ProblemEntity } from "./problemEntity";

export class ProblemsAPI {
    static baseUrl: string = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

    static async create(problem: ProblemEntity) {
        try {
            const result = await axios.post("http://" + this.baseUrl + ':3003/problems', problem);
            return result.data;
        }
        catch(error) {
        }
    }

    static async fetchAllProblems() {
        try {
            const result = await axios.get("http://" + this.baseUrl + ':3003/problems')
            return result.data
        }
        catch(error) {
            console.log("error", error);
        }
    }
}