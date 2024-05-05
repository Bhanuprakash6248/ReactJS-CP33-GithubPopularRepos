// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, avatarUrl, forksCount, starsCount, issuesCount} = repoDetails
  return (
    <li>
      <div>
        <img src={avatarUrl} alt={name} className="repo-img" />
        <p>{name}</p>
      </div>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="stars-img"
          />
          <p>{`${starsCount} stars`}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="forks-img"
          />
          <p>{`${forksCount} forks`}</p>
        </div>
        <div>
          <img src="" alt="open issues" className="openIssues-img" />
          <p>{`${issuesCount} open issues`}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
