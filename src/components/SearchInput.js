import React from "react";

class SearchInput extends React.Component{
state = {entry: ""};

onSearchInput = (event) =>{
this.setState({entry :event.target.value});
}

onFormSubmit = (event) =>{
 event.preventDefault();
 this.props.onSearchSubmit(this.state.entry)
}



    render() {

        return(
            <div className ="ui segment">
                <form  onSubmit = {this.onFormSubmit} className = "ui form">
                 <div className = "field">
                     <div className = "ui massive icon input">
                     <input  onChange = {this.onSearchInput} 
                     type = "text" placeholder = "search..." value = {this.state.entry}/>
                     <i className = "search icon"></i>
                    
                     </div>

                 </div>
            
                </form>
            </div>
        )
    }
}

export default SearchInput;