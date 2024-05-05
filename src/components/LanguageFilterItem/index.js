// Write your code here
const LanguageFilterItem = props => {
  const {dataDetails,activeLanguageFilterId} = props
  const {language} = dataDetails
  return (
    <li>
      <button type="button" className="li-btn" >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
