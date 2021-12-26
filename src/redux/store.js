import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "./blockchain/blockchainReducer";
import dataReducer from "./data/dataReducer";
import {quizItemReducer, quizReducer, mintReducer} from "./reducers/quizReducers";

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
  quizData: quizReducer,
  quizItemData: quizItemReducer,
  mintData: mintReducer
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const configureStore = () => {
  return createStore(rootReducer, {}, composeEnhancers);
};

const store = configureStore();

export default store;
