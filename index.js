import React,  { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search';
import RecommendationList from './components/recommendation_list'
import Video from './components/video';
import YoutubeSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC8ogDoemjm5TV7Sje4LLRqaDZAr3pl5XY';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };
        this.handleSearch('');
    }

    handleSearch(term) {
        YoutubeSearch({key: API_KEY, term: term}, (data) => {
            this.setState({ videos:data, selectedVideo: data[0]});
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={term => this.handleSearch(term)} />
                <Video video={ this.state.selectedVideo } />
                <RecommendationList
                onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                videos={ this.state.videos } />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('#special'));