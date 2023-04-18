import axios from "axios";
import { Platform } from "react-native";
import { ProblemEntity } from "./problemEntity";

export class ProblemsAPI {
  static myIp: string = "192.168.0.105";

  static async create(problem: ProblemEntity) {
    try {
      console.log("sending data", problem);

      const result = await axios.post(
        "https://5997-5-179-80-205.eu.ngrok.io/problems",
        { data: problem, headers: { "Content-Type": "multipart/form-data" } }
      );
      return result.data;
    } catch (error) {}
  }

  static async fetchAllProblems() {
    try {
      const result = await axios.get(
        "https://5997-5-179-80-205.eu.ngrok.io/problems"
      );
      console.log(result);

      return result.data;
    } catch (error) {
      console.log("error", error);
    }
  }
}
