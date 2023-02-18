import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { HighScoreReadModel } from "../models/HighScoreListReadModel";
import { HighscoreService } from "../services/HighscoreService";
import { highscoreActions } from "./highscoreSlice";
import { RootState } from "./store";

export const fetchHighscorelists = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().highscores.highscoreLists.length === 0) {
      try {
        const response: HighScoreReadModel[] =
          await HighscoreService.getAllHighscoreLists();
        dispatch(highscoreActions.setHighscorelists(response));
      } catch (error: any) {
        console.log("Catch error:", error);
        console.log("json:", error.toJSON());
        if (error?.response) {
          console.log("response:", error?.response);
        }
        if (error?.request) {
          console.log("request:", error?.request);
        }
      }
    }
  };
};
