import React, { Component } from "react";

class PostDetail extends Component {
  constructor(props) {
    super(props)
    this.titleWasClciked = this.titleWasClciked.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.handleRemoveContentButton = this.handleRemoveContentButton.bind(this);
    this.state = {
      showContent: true,
      postItem: null
    }
  }

  handleRemoveContentButton(event) {
    if (this.props.didHandleRemove) {
      this.props.didHandleRemove(this.props.post)
    }
  }

  titleWasClciked(event) {
    event.preventDefault()
    const { dataCallback } = this.props
    let newPostItem = this.props.post
    newPostItem['title'] = "This is my awesome new title"

    this.setState({
      postItem: newPostItem
    })
    if (dataCallback !== undefined) {
      dataCallback(newPostItem)
    }
  }

  toggleContent(event) {
    event.preventDefault()
    this.setState({
      showContent: !this.state.showContent
    })
  }

  setPostStateOnProps() {
    const { post } = this.props
    this.setState({
      postItem: post
    })
  }

  componentDidUpdate(prevProps, prevState, snapShop) {
    if (this.props !== prevProps) {
      this.setPostStateOnProps()
    }
  }

  componentDidMount() {
    this.setPostStateOnProps()
  }

  render() {
    const { postItem } = this.state;
    const { showContent } = this.state;
    return (
      <div>
        {postItem !== null ? <div>
        <h1 onClick={this.titleWasClciked}>{postItem.title} {postItem.date}</h1>
          {showContent === true ? <p>{postItem.content}</p> : ''}
          <button onClick={this.toggleContent}>Toggle content display</button>
          <button onClick={this.handleRemoveContentButton}>Remove Content</button>
        </div> : ""}
      </div>
    );
  }
}

export default PostDetail;
