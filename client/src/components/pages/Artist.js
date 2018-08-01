import React, {Component} from "react";
import "../../App.css";
import axios from "axios";


class Artist extends Component{
    state={
        postName:"",
        postDescription:"",
        postLink:"",
      
    }

  

    onStateChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    submitArt=(event)=>{
       event.preventDefault()
       
       
        console.log(this.state)
        axios.post('/api',this.state).then((res)=>{
          console.log(res)
        })
    }

render(){
    return(
        <div>
   
<h1 className='header'>Artist Page</h1>
<form>
    <label>Post Name:
        <input value={this.state.postName}
                name="postName"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
        </label>
        </form>
        <form>
    <label>Post Description:
        <input value={this.state.postDescription}
                name="postDescription"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
        </label>
        </form>
        <form>
    <label>Post Link:
        <input value={this.state.postLink}
                name="postLink"
                type="text"
                onChange={this.onStateChange}
                placeholder=""/>
        </label>
        </form>
        <button onClick={this.submitArt}>Send</button>
<a href='/'>Home</a>
</div>
    )
}
}


export default Artist;