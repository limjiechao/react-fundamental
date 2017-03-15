import React, { Component } from 'react';
import Comment from './Comment.js'
import './App.css';

class Post extends Component {
  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  handleClick (e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }
  handleChange (e) {
    console.log(e);
    this.setState({
      body: e.target.value
    })
  }
  render() {
    let comments = this.props.comments.map( (comment, index) => (
      <Comment body={comment} key={index} />
    ))
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>by {this.props.author}</p>
        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.handleClick(e)}>Edit Body</button>
          <input type="text" onChange={(e) => this.handleChange(e)} />
        </div>
        <h3>Comments:</h3>
        <p>{comments}</p>
      </div>
    );
  }
}

export default Post;
