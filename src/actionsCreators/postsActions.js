export const getPosts = () => dispatch => {
  const req = new XMLHttpRequest();
  req.open("GET", "https://simple-blog-api.crew.red/posts", true);
  req.send();
  req.onload = () => {
    const posts = JSON.parse(req.responseText);
    dispatch({
      type: "GET_POSTS",
      payload: posts
    });
  };
};
export const getPost = id => dispatch => {
  const req = new XMLHttpRequest();
  req.open(
    "GET",
    `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`,
    true
  );
  req.send();
  req.onload = () => {
    const post = JSON.parse(req.responseText);
    dispatch({
      type: "GET_POST",
      payload: post
    });
  };
};
export const addComment = comment => dispatch => {
  const req = new XMLHttpRequest();
  req.open("POST", `https://simple-blog-api.crew.red/comments`, true);
  console.log(comment.body);

  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify(comment));
  req.onload = () => {
    const newcomment = JSON.parse(req.responseText);
    dispatch({
      type: "ADD_COMMENT",
      payload: newcomment
    });
  };
};
