import UserStat from "./UserStat";

function StatList(props) {
  const { leadersList } = props;
  return (
    <ul className="list-group">
      {leadersList.map((leader) => (
        <li key={leader.id} className="col-12 col-md-6 list-group-item mb-3 mx-auto rounded-3">
          <UserStat id={leader.id} stat={leader.stat} />
        </li>
      ))}
    </ul>
  );
}

export default StatList;
