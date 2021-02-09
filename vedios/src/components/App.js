import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VedioList from './VedioList';
import VedioDetails from './VedioDetails';
class App extends React.Component {
    state = { vedios: [], vedio: null }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search',
            {
                params: {
                    q: term
                }
            })
        this.setState({ vedios: response.data.items })
    }
    onVedioSelect = (vedio) => {
        this.setState({ vedio: vedio });
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                    <div className='eleven wide column '>
                        <VedioDetails vedio={this.state.vedio} />
                    </div>
                    <div className='five wide column '>
                        <VedioList vedios={this.state.vedios} onVedioSelect={this.onVedioSelect} />
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default App;