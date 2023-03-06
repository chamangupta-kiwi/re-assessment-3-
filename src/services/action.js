import { ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from './constraints'


export const studentReg = (data) => {
  return {
    type: ADD_STUDENT,
    payload: data
  }
}

export const deleteStudent = (id) => {
  // console.log(id)
  return {
    type: DELETE_STUDENT,
    payload: id
  }
}

export const updateStudent = (data) => {
 // console.log(data, "edited")
  return {
    type: UPDATE_STUDENT,
    payload: data
  }
}