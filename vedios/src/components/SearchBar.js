import React from 'react';
class SearchBar extends React.Component{
    state={inputText:''};
    onInputChange=(event)=>{
        this.setState({inputText:event.target.value});
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.inputText);
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Vedio Search</label>
                        <input type="text" value={this.state.inputText} onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;