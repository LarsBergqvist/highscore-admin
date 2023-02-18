import { configureStore } from "@reduxjs/toolkit";
import highscoreSlice from "./highscoreSlice";

const store = configureStore({
  reducer: { highscores: highscoreSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
