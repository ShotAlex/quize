import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-fa02f-default-rtdb.europe-west1.firebasedatabase.app/'
})
