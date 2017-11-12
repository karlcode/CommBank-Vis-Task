const filters = (state = [], action) => {
    switch (action.type) {
      case 'CHANGE_TIME':
        return action.year
      
      default:
        return state
    }
  }
  
  export default filters
  