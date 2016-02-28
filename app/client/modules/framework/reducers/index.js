// global
import navbar from './navbar';
import info from './info';

// modules
import blog from 'blog/reducers';
import admin from 'admin/reducers';

export default combineReducers({
  navbar,
  info,

  // modules
  blog,
  admin
});