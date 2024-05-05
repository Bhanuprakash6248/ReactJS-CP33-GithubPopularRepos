import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {activeLanguageFilterId: languageFiltersData[0].id, repoData: []}

  componentDidMount() {
    this.getRepositoryData()
  }

  getRepositoryData = async () => {
    const url = ' https://apis.ccbp.in/popular-repos'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      avatarUrl: data.avatar_url,
      forksCount: data.forks_count,
      starsCount: data.stars_count,
      issuesCount: data.issues_count,
      id: data.id,
      name: data.name,
    }
    this.setState({repoData: updatedData})
  }

  renderRepositoryItems = () => {
    const {repoData} = this.state

    return (
      <ul>
        {repoData.map(each => (
          <RepositoryItem repoDetails={each} />
        ))}
      </ul>
    )
  }

  renderRepository = () => {}

  render() {
    const {activeLanguageFilterId} =this.state
    return (
      <div className="github-bg">
        <h1 className="github-head">Popular</h1>
        <ul>
          {languageFiltersData.map(each => (
            <LanguageFilterItem key={each.id} dataDetails={each} activeLanguageId={activeLanguageFilterId}/>
          ))}
        </ul>
        {this.renderRepositoryItems()}
      </div>
    )
  }
}

export default GithubPopularRepos
