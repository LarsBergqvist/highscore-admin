import { HighScoreReadModel } from "../models/HighScoreListReadModel";
import { Api } from "./Api";

export class HighscoreService {
  static getAllHighscoreLists = async () => {
    let response = await Api().get("highscore-lists");
    return response.data as HighScoreReadModel[];
  };
}
