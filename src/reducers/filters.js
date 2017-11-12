const initialState = {
    year: 1,
    category: 1
}

function filters(state = initialState, action) {
    switch (action.type) {
      case 'CHANGE_TIME':
        console.log(action)
        return {...state, year: action.year}
      case 'CHANGE_CATEGORY':
        return {...state, category: action.category}  
      default:
        return state
    }
  }
  
  export default filters
  