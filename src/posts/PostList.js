import React, { Component } from "react";
import PostData from "../data/posts.json";
import PostDetail from "../posts/PostDetail.js";
class PostList extends Component {
  constructor(props) {
    super(props)
    this.handleDataCallback = this.handleDataCallback.bind(this)
    this.handlePostRemove = this.handlePostRemove.bind(this)
    this.state = {
      postList: []
    }
  }

  updateBackend(currentPostList){
    console.log("updateing...")
    this.setState({
      postList: currentPostList
    })
  }

  handlePostRemove(postItem){
    let currentPostList = this.state.postList
    currentPostList.pop(postItem)
    this.updateBackend(currentPostList)
  }

  handleDataCallback(postItem) {
    //alert(txtMsg)
    //console.log(postItem)
    let currentPostList = this.state.postList
    currentPostList.push(postItem)
    this.setState({
      postList: currentPostList
    })
  }

  componentDidMount(){
    this.setState({
      postList: PostData
    })
  }

  render() {
    const {postList} = this.state
    return (
      <div>
        <h1>Hello world</h1>
        {PostData.map((item, index) => {
          return <PostDetail
            post={item}
            key={`post-list-key ${index}`}
            didHandleRemove = {this.handlePostRemove}
            dataCallback={this.handleDataCallback}
          />
        })}
      </div>
    );
  }
}

export default PostList;
