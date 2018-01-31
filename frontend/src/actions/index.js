export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_CAT_POSTS = 'GET_CAT_POSTS';
export const GET_SPEC_COMMENTS = 'GET_SPEC_COMMENTS';
export const GET_SPEC_POST = 'GET_SPEC_POST';
export const GET_CATEGORIES = 'GET_CATEGORIES';
// export const POST_POST_VOTE = 'POST_POST_VOTE';

export const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts,
  };
};

export const getCatPosts = (catPosts) => {
  return {
    type: GET_CAT_POSTS,
    catPosts,
  };
};

export const getSpecComments = (specComments) => {
  return {
    type: GET_SPEC_COMMENTS,
    specComments,
  };
};

export const getSpecPost = (specPost) => {
  return {
    type: GET_SPEC_POST,
    specPost,
  };
};

export const getCategories = (cats) => {
  return {
    type: GET_CATEGORIES,
    cats,
  };
};

// export const postPostVote = (id, vote) => {
//   return {
//     type: POST_POST_VOTE,
//     id,
//     vote,
//   }
// }
