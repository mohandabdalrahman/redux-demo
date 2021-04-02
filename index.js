const redux = require('redux')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE = 'BUY_ICE';

// ACTION CREATOR
function buyCake() {
  // return action
  return {
    type: BUY_CAKE,
    info: 'first action'
  }
}
function buyIce() {
  // return action
  return {
    type: BUY_ICE,
    info: 'second action'
  }
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 5
// }

const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIceCreams: 5
}

// (prevState,action)=> newState

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       }
//     case BUY_ICE:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1
//       }
//     default:
//       return state
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
    default:
      return state
  }
}


const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducers, applyMiddleware(logger))
// console.log('initial state', store.getState())
// listener any time state update
const unSubscribe = store.subscribe(() => { })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())

unSubscribe()