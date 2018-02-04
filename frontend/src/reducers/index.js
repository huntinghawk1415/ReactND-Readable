import * as Action from '../actions';

const initialState = {
  homeData: null,
  postsData: null,
  specPostData: null,
  commentsData: null,
  categories: null,
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
    case Action.GET_CATEGORIES:
      newState.categories = action.cats;
      return newState;
    case Action.SORT_HOME_BY_DATE:
      newState.homeData = action.func(newState.homeData);
      return newState;
    case Action.SORT_HOME_BY_VOTE:
      newState.homeData = action.func(newState.homeData);
      return newState;
    case Action.SORT_POSTS_BY_DATE:
      newState.postsData = action.func(newState.postsData);
      return newState;
    case Action.SORT_POSTS_BY_VOTE:
      newState.postsData = action.func(newState.postsData);
      return newState;
    case Action.DELETE_POST:
      newState.specPostData = null;
      return newState;
    case Action.DELETE_COMMENT:
      return newState;
    default:
      return state;
  }
};

export default reducer;
