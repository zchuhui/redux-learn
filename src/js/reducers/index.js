import ActionTypes from '../constants/action-types'
const { ADD_ARTICLE } = ActionTypes

const initState = {
  articles: [{id:'1',title:'init article.'}]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;