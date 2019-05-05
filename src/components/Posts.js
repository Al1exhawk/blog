import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actionsCreators/postsActions";
import Post from "./Post";
import PropTypes from "prop-types";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <div className="container">
        {posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
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
  { getPosts }
)(Posts);
