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

export const editePost = (editedPost, url) => dispatch => {
  const req = new XMLHttpRequest();
  req.open("PUT", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify(editedPost));
  req.onload = () => {
    const Editedcomment = JSON.parse(req.responseText);
    dispatch({
      type: "UPD_POST",
      payload: Editedcomment
    });
  };
};

export const addPost = newPost => dispatch => {
  const req = new XMLHttpRequest();
  req.open("PUT", "https://simple-blog-api.crew.red/posts", true);
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify(newPost));
  req.onload = () => {
    const Editedcomment = JSON.parse(req.responseText);
    dispatch({
      type: "ADD_POST",
      payload: Editedcomment
    });
  };
};
