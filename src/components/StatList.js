import UserStat from "./UserStat";

function StatList(props) {
  const { leadersList } = props;
  return (
    <ul className="list-group">
      {leadersList.map((leader) => (
        <li key={leader.id} className="list-group-item mb-3">
          <UserStat id={leader.id} stat={leader.stat} />
        </li>
      ))}
    </ul>
  );
}

export default StatList;
