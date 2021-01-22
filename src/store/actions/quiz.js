import axios from './../../axios/axios-quiz'

export function fetchQuizes() {
  dispatch(fetchQuizesStart())
  return async dispatch => {
    try {
      const response = await axios.get('/quizes.json')
      const quizes = []

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test ${index}`
        })
      })

      dispatch(fetchQuizesSuccess(quizes))
    } catch (e) {
      dispatch(fetchQuizesError(e))
    }
  }
} 

export function fetchQuizesStart() {
  return {
    type: ''
  }
}

export function fetchQuizesSuccess(quizes) {

}

export function fetchQuizesError(e) {

}