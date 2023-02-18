import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { HighScoreReadModel } from "../models/HighScoreListReadModel";
import { fetchHighscorelists } from "../store/actions";
import { GameResultsView } from "./GameResultsView";

export const HighScoreListsView = () => {
  const highscoreLists = useAppSelector(
    (state) => state.highscores.highscoreLists
  );
  const [selectedList, setSelectedList] = useState<HighScoreReadModel>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHighscorelists());
  });

  const onListClicked = (list: HighScoreReadModel) => {
    setSelectedList(list);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Unit</th>
            <th>Low score is best</th>
          </tr>
        </thead>
        <tbody>
          {highscoreLists &&
            highscoreLists.map((list) => (
              <tr key={list.id} onClick={() => onListClicked(list)}>
                <td>{list.name}</td>
                <td>{list.unit}</td>
                <td>{list.lowIsBest ? "true" : "false"}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <hr />
      {selectedList && <GameResultsView list={selectedList} />}
    </>
  );
};
