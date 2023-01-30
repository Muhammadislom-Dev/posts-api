const initialState = {
  posts: [],
};

export const postsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "setPosts":
      return { posts: action.payload };
    default:
      return state;
  }
};
