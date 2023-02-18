import { GameResult } from "./GameResult";

export interface HighScoreReadModel {
  id: string;
  name: string;
  lowIsBest: boolean;
  maxSize: string;
  unit: string;
  results: GameResult[];
}
