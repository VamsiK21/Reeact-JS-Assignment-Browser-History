import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <div className="time-container">
        <p className="time-text">{timeAccessed}</p>
        <div className="logo-details">
          <img className="logo-style" src={logoUrl} alt="domain logo" />
          <p className="title-text">{title}</p>
          <p className="url-text">{domainUrl}</p>
        </div>
      </div>
      <button
        onClick={onDelete}
        data-testid="delete"
        type="button"
        className="btn-delete"
      >
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
