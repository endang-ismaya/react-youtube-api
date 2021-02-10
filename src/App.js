import React, { Component } from "react"
import "semantic-ui-css/semantic.min.css"
import "./css/global.css"
import youtube from "./apis/Youtube"
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"

class App extends Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    })

    this.setState({ videos: res.data.items })
  }

  onVideoSelect = (video) => {
    this.setState(...this.state, { selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container" style={{ margin: "10px 0" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    )
  }
}

export default App
