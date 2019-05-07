import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, addPost } from "../actionsCreators/postsActions";
import Post from "./Post";
import PropTypes from "prop-types";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getPosts();
  }
  componentDidUpdate() {}
  Add() {
    const body = this.abody.value;
    const title = this.atitle.value;
    const newPost = {
      title,
      body
    };
    this.props.addPost(newPost);
  }
  render() {
    const { posts } = this.props;

    return (
      <div className="container">
        <div className="post">
          <div className="FormsDiv">
            <label>
              Title:
              <input
                type="text"
                name="title"
                size="40"
                ref={input => (this.atitle = input)}
                onChange
              />
            </label>
          </div>
          <div className="FormsDiv">
            <label>
              Body:
              <textarea
                rows="9"
                cols="50"
                ref={input => (this.abody = input)}
                onChange
              />
            </label>
            <div className="FormsDiv">
              <button className="Submite" onClick={this.Add.bind(this)}>
                Add Post
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          {posts.map((post, index) => {
            return <Post key={index} post={post} />;
          })}
        </div>
      </div>
    );
  }
}
Posts.propTypes = {
  posts: PropTypes.array.isRequired
};
export default connect(
  state => ({
    posts: state.posts
  }),
  { getPosts, addPost }
)(Posts);
