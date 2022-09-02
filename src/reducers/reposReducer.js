const SET_REPOS = 'SET_REPOS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE';

const defaultState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count,
        isFetching: false,
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }
    case SET_CURENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
  
    default:
      return state;
  }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool });
export const setCurrentPage = (page) => ({ type: SET_CURENT_PAGE, payload: page });