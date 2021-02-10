import React, { Component } from "react"
import "semantic-ui-css/semantic.min.css"
import youtube from "./apis/Youtube"
import SearchBar from "./components/SearchBar"

class App extends Component {
  state = { images: [] }

  onTermSubmit = async (term) => {
    const videos = await youtube.get("/search", {
      params: {
        q: term,
      },
    })

    console.log(videos)
  }
  render() {
    return (
      <div className="ui container" style={{ margin: "10px 0" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    )
  }
}

export default App
