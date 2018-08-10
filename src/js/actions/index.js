import ActionTypes from '../constants/action-types';
const { ADD_ARTICLE } = ActionTypes

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article })