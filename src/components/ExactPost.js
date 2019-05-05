import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, addComment } from "../actionsCreators/postsActions";

class ExactPost extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  addComment() {
    const value = this.commentInput.value;
    const { id } = this.props.post;
    const comment = {
      postId: id,
      body: value
    };
    this.props.addComment(comment);
  }
  render() {
    const { title, body, comments } = this.props.post;

    return (
      <div className="container">
        <div className="post">
          <h3>{title}</h3>
          <span className="bodytext">{body}</span>
          <div className="commenTinput">
            <input type="text" ref={input => (this.commentInput = input)} />
            <button style={{ backgroundColor: "red" }}>
              <i
                className="fas fa-angle-double-down"
                onClick={this.addComment.bind(this)}
              />
            </button>
          </div>

          {comments !== undefined && (
            <div id="comments">
              <ul>
                {comments.map((comment, index) => {
                  return <li key={index}>{comment.body}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    post: state.post
  }),
  { getPost, addComment }
)(ExactPost);
