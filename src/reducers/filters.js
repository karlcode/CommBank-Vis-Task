const initialState = {
    year: '2014',
    category: 'Penalties'
}

function filters(state = initialState, action) {
    switch (action.type) {
      case 'CHANGE_TIME':
        return {
            ...state, 
            year: action.year
        }
      case 'CHANGE_CATEGORY':
        return {
            ...state, 
            category: action.category
        }  
      default:
        return state
    }
  }
  
  export default filters
  