import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPost,
  addComment,
  editePost
} from "../actionsCreators/postsActions";

class ExactPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  onEditeClick() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  addComment() {
    const value = this.commentInput.value;
    const { id } = this.props.post;
    const comment = {
      postId: id,
      body: value
    };
    this.props.addComment(comment);
    this.commentInput.value = "";
  }
  Edite() {
    const { id } = this.props.post;
    const { body } = this.body.value;
    const { title } = this.title.value;
    const url = `https://simple-blog-api.crew.red/posts/${id}`;
    const EditedPost = {
      body,
      title
    };
    this.props.editePost(EditedPost, url);
  }
  render() {
    const { title, body, comments } = this.props.post;

    return (
      //POST
      <div className="container">
        <div className="post">
          {!this.state.isEditing ? (
            <div>
              <div>
                <button
                  style={{ float: "right", backgroundColor: "yellow" }}
                  onClick={this.onEditeClick.bind(this)}
                >
                  <i className="fas fa-edit" />
                </button>

                <h3>{title}</h3>
              </div>

              <span className="bodytext">{body}</span>
              <div className="commenTinput">
                <input type="text" ref={input => (this.commentInput = input)} />
                <button style={{ backgroundColor: "#00ff00" }}>
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
          ) : (
            //FORM
            <div>
              <div className="FormsDiv">
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    size="40"
                    value={this.props.post.title}
                    ref={input => (this.title = input)}
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
                    value={this.props.post.body}
                    ref={input => (this.body = input)}
                    onChange
                  />
                </label>
                <div className="FormsDiv">
                  <button className="Submite" onClick={this.Edite.bind(this)}>
                    Edite
                  </button>
                </div>
              </div>
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
  { getPost, addComment, editePost }
)(ExactPost);
