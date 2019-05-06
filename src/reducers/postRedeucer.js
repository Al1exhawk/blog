const initialState = {
  posts: [],
  post: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS": {
      return { ...state, posts: action.payload };
    }
    case "GET_POST": {
      return { ...state, post: action.payload };
    }
    case "ADD_COMMENT": {
      return {
        ...state,
        posts: state.posts.map(post => {
          return post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, action.payload] }
            : post;
        })
      };
    }
    case "UPD_POST": {
      return {
        ...state,
        posts: state.posts.map(post => {
          return post.post.id === action.payload.id
            ? {
                ...post,
                title: action.payload.title,
                body: action.payload.body
              }
            : post;
        })
      };
    }
    default: {
      return state;
    }
  }
}
