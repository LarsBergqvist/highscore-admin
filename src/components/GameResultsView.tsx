import { HighScoreReadModel } from "../models/HighScoreListReadModel";

export const GameResultsView = ({ list }: { list: HighScoreReadModel }) => {
  return (
    <>
      <h2>{list?.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>User</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.results.map((result, index) => (
              <tr key={result.id}>
                <td>#{index + 1}</td>
                <td>{result.userName}</td>
                <td>{result.score}</td>
                <td>{new Date(result.utcDateTime).toLocaleDateString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
