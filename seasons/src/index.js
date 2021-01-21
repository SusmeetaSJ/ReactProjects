import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'
class App extends React.Component {
    state = { lat: null, err: null }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({ lat: position.coords.latitude }),
            err => this.setState({ err: err.message })
        )
    }
  
    render() {
        if (this.state.lat && !this.state.err)
        {
            return (
                <SeasonDisplay latitude={this.state.lat}></SeasonDisplay>
            )
        }
           
        if (!this.state.lat && this.state.err)
        {
            return (<div>
            Error:{this.state.err}
        </div>)

        }
           return <Spinner message="Please accept the location request....."></Spinner>
    }
}
ReactDOM.render(<App />, document.querySelector('#root'))