import * as Action from '../actions';

const initialState = {
  homeData: null,
  postsData: null,
  specPostData: null,
  commentsData: null,
};

const reducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case Action.GET_ALL_POSTS:
      newState.homeData = action.posts;
      return newState;
    case Action.GET_CAT_POSTS:
      newState.postsData = action.catPosts;
      return newState;
    case Action.GET_SPEC_COMMENTS:
      newState.commentsData = action.specComments;
      return newState;
    case Action.GET_SPEC_POST:
      newState.specPostData = action.specPost;
      return newState;
    default:
      console.log('returning initial state');
      return state;
  }
};

export default reducer;
