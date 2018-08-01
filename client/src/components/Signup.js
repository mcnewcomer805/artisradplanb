/*import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";
// import API from "../utils/API";
import "./Home.css";
import axios from "axios"
import { BrowserRouter as Router, Route } from "react-router-dom";



class Home extends Component {
  state = {
    results: [],
    // search: "",
    saved: []

  };

  //   componentDidMount() {
  //     this.searchTopics("Sports");
  //     this.getSavedTopics();
  //   }
  //   getSavedTopics() {
  //     axios.get("/api/topics").then((response) => {
  //       console.log(response);
  //       this.setState({
  //         saved: response.data
  //       });
  //     })
  //   }





  // fileChangedHandler = => {

  // }



  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchTopics(this.state.search);
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="App">
              <div className="App-header">
                <div>
                  <h1 className="span">Arttt</h1><br />
                </div><br></br><br></br>
                <div>
                  <h3>Upload and share your art to get community feedback!</h3>
                </div>
              </div></div>
            <h2>Search Art Collection</h2>
            <Navbar />
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            
            
            <h2>____________________________________________________________________________________________________________________________________________</h2>
            {this.state.results.map((item) => {
              console.log(item);
              // create a route-able link for each product
              return (
                <li className="list-group-item" key={item.i}>
                  {item.headline.main}
                  {" ... "}<br></br>
                  <a href="{item.web_url}">{item.web_url}</a>
                  <button onClick={() => this.save(item.headline.main, item.web_url)} className="btn btn-outline-primary mt-2">Save</button>
                </li>
              );
            })}

 {/* <input type="submit" onChange={this.fileChangedHandler}> }
 /*
<button onClick={this.uploadHandler}>Upload!</button>

            <h2>Saved Art Collection Favorites</h2>
            {this.state.saved.map((item) => {
              console.log(item);
              return (
                <li className="list-group-item" key={item.i}>
                  {item.title}
                  {" ... "}<br></br>
                  <a href="{item.web_url}">{item.url}</a>
                  <button onClick={() => this.delete(item._id)} className="btn btn-outline-primary mt-2">Delete</button>
                </li>
              );
            })}

          </div>

        </Router>









      </div>
    );

  }
}




export default Home;*/

import "./Home.css";
import SearchForm from "./SearchForm";
import React from "react";
import "../App.css";
import Signup2 from "Signup2";

const Home = ()=>{
return(
    <div>
 
<h1>Welcome to The Arttt Review</h1>
<br />
<div className="App-header"></div><br />
     <a href="/artist">Artist Page</a>
     <h3>Search for and annotate articles of interest!</h3>
     <br />
     <SearchForm
                // value={this.state.search}
                // handleInputChange={this.handleInputChange}
                // handleFormSubmit={this.handleFormSubmit}
              />
              <div class="footer"><strong>	&copy;</strong>Arttt Review 2018</div>
</div>




)
}

export default Home;