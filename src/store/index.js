import {createStore, applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'

//const store = createStore(reducer);
//middleware, 谁都可以去取东西，between actionCreator and Reducer.
//redux thunk是Redux的中间件。
//安装一个Redux developer tool
//Redux-Thunk 是帮我们做Ajaxcall 因为我们可以return一个function了
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(
    reducer, enhancer);
export default store;