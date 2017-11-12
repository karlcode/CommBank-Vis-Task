import { connect } from 'react-redux'
import Filters from '../components/Filters'

const mapStateToProps = (state) => ({
    category: 1,
    year: 1
})

const mapDispatchToProps = (dispatch) => ({
    changeTime: (year) => {
      dispatch({
          type: 'CHANGE_TIME',
          year
      })
    }
  })

const ChangeFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default ChangeFilters
