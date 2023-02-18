import { HighScoreReadModel } from "../models/HighScoreListReadModel";

export const GameResultsView = ({ list }: { list: HighScoreReadModel }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.results.map((result) => (
              <tr key={result.id}>
                <td>{result.userName}</td>
                <td>{result.score}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
