import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  const { title, body, id } = props.post;

  return (
    <div className="post">
      <h3>
        {title}{" "}
        <Link to={`posts/${id}`}>
          <i className="fas fa-eye" />
        </Link>
      </h3>

      <span className="bodytext">{body}</span>
    </div>
  );
};
export default Post;
