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
    // case Action.POST_POST_VOTE:
    //   if(action.vote === 'upVote') {
    //     newState.map(s =>
    //       s.id === action.id
    //         ? s.voteScore++
    //         : s
    //     )
    //   } else if (action.vote === 'downVote') {
    //     var stateMapped = newState.map(s =>
    //       s.id === action.id
    //         ? s.voteScore--
    //         : s
    //     )
    //     return stateMapped
    //   } else {
    //     console.log('failed', action.id, action.vote)
    //     return state
    //   }
    default:
      console.log('returning initial state');
      return state;
  }
};

export default reducer;
