const filters = (state = "hi", action) => {
    switch (action.type) {
      case 'CHANGE_YEAR':
        return action
      
      default:
        return state
    }
  }
  
  export default filters
  