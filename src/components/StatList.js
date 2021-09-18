import UserStat from './UserStat'

function StatList(props){
  const { leadersList } = props
  return(
    <div>
      <ul className='leaders-list'>
        {
          leadersList.map((leader)=> <li key={leader.id}><UserStat id={leader.id} stat={leader.stat}/></li>)
        }
      </ul>
    </div>
  )
}

export default StatList