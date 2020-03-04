import produce from 'immer';
import { CHANGE_ACTIVE_ARTICLE, UPDATE_ARTICLES } from './actions';

const initialState = {
  allArticles: [],
  activeArticle: {}
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_ARTICLES.SUCCESS: {
        draft.allArticles = action.payload;
        break;
      }
      case CHANGE_ACTIVE_ARTICLE.SUCCESS: {
        draft.activeArticle = action.payload;
        break;
      }
      default: {
        break;
      }
    }
  });
