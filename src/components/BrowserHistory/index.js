import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({
      historyList: initialHistoryList,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(eachItem => eachItem.id !== id)

    this.setState({
      historyList: filteredList,
    })
  }

  render() {
    const {searchInput, historyList} = this.state

    const searchResults = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="navBar-container">
          <img
            className="history-image"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />

          <div className="input-container">
            <button type="button" className="search-button">
              <img
                className="search-image"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </button>
            <input
              type="search"
              className="input-style"
              placeholder="search history"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
        <div className="container">
          <div className="bg-container">
            {searchResults.length === 0 ? (
              <p className="empty-heading">There is no history to show</p>
            ) : (
              <ul className="content-container">
                {searchResults.map(eachItem => (
                  <HistoryItem
                    historyDetails={eachItem}
                    key={eachItem.id}
                    deleteHistory={this.deleteHistory}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
