import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput"
import ImageList from "./ImageList"


class App extends React.Component{

    state = {images : []};

    onSearchSubmit= async (entry) => {
    const response = await axios.get 
    (`https://pixabay.com/api/?key=22249987-7fef1e5f89e2edb74adaef514&q=${entry}&image_type=photo&pretty=true`)
    this.setState({images: response.data.hits});
    
    }
    

    render() {
        return(
        <div className = "ui container" style = {{marginTop :"30px"}}>
          <SearchInput onSearchSubmit = {this.onSearchSubmit}/>
          <ImageList images = {this.state.images}/>
        </div>
        )
    }
}


export default App;