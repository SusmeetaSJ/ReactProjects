import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VedioList from './VedioList';
class App extends React.Component {
    state = { vedios: [] }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search',
            {
                params: {
                    q: term
                }
            })
        this.setState({ vedios: response.data.items })
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VedioList vedios={this.state.vedios}/>
               
            </div>

        )
    }
}
export default App;