import { connect } from 'react-redux'
import Filters from '../components/Filters'

function mapStateToProps(state) {
    const map = { 
        year: state.filters.year,
        category: state.filters.category
     };
    return map;
  }

const mapDispatchToProps = (dispatch) => ({
    changeTime: (year) => {
      dispatch({
          type: 'CHANGE_TIME',
          year
      })
    },
    changeCategory: (category)=>{
      dispatch({
          type: 'CHANGE_CATEGORY',
          category  
      })
    }
  })

const ChangeFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default ChangeFilters
