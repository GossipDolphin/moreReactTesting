import PostDetail from './PostDetail'
import React, { Component } from "react";
import PostData from "../data/posts.json";
import PostList from './PostList';

class PostSorting extends Component {
    constructor(props) {
        super(props)
        this.toggleListReverse = this.toggleListReverse.bind(this)
        this.toggleSortByDate = this.toggleSortByDate.bind(this)
        this.state = {
            postList: [],
            isOldestFirst: true
        }
    }

    toggleSortByDate(event){
        const {postList} = this.state
        let newPostList = postList

        this.setState({
            postList: newPostList.sort((a, b) => new Date(b.date) - new Date(a.date))
        })
    }

    toggleListReverse(event) {
        const {postList} = this.state
        let newPostList = postList.reverse()
        this.setState({
            postList: newPostList
        })
    }

    componentDidMount() {
        const postList = PostData
        this.setState({
            isOldestFirst: true,
            postList: PostData
        })
    }

    render() {
        const { postList } = this.state
        return (
            <div>
                <h1>Hello world</h1>
                <button onClick={this.toggleListReverse}>Reverse Order</button>
                <button onClick={this.toggleSortByDate}>Sort by date</button>
                {postList.map((item, index) => {
                    return <PostDetail
                        post={item}
                        key={`post-list-key ${index}`}
                        didHandleRemove={this.handlePostRemove}
                        dataCallback={this.handleDataCallback}
                    />
                })}
            </div>
        );
    }
}

export default PostSorting