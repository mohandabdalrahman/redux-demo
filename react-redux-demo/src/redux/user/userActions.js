import axios from 'axios'
import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from './userTypes'

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

const fetchUserSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}

const fetchUserFail = error => {
  return {
    type: FETCH_USER_FAIL,
    payload: error
  }
}

// async action creator
export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUserRequest())
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail(error.message))
  }
}
