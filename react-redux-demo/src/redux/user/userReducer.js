import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from './userTypes'

const initialState = {
  loading: false,
  error: '',
  data: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        error: '',
        data: action.payload
      }
    case FETCH_USER_FAIL:
      return {
        loading: false,
        data: [],
        error: action.payload,
      }
  }
}


export default userReducer