// eslint-disable-next-line import/no-anonymous-default-export
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  let ret;
  switch (action.type) {
    case FETCH_ALL:
      ret =  action.payload;
      break;
    case LIKE:
      ret = posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      break;
    case CREATE:
      ret =  [...posts, action.payload];
      break;
    case UPDATE:
      ret =  posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      break;
    case DELETE:
      ret =  posts.filter((post) => post._id !== action.payload);
      break;
    default:
      ret = posts;break;
  }
  return ret;
};
