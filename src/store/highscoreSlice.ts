import { HighScoreReadModel } from "../models/HighScoreListReadModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HighScoreListState {
  highscoreLists: HighScoreReadModel[];
}
const initialState: HighScoreListState = {
  highscoreLists: [],
};

const highscoreSlice = createSlice({
  name: "highscore",
  initialState: initialState,
  reducers: {
    setHighscorelists(state, action: PayloadAction<HighScoreReadModel[]>) {
      state.highscoreLists = action.payload;
    },
  },
});
export default highscoreSlice;
export const highscoreActions = highscoreSlice.actions;
