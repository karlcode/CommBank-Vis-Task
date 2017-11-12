import { connect } from 'react-redux'
import Filters from '../components/Filters'

const mapStateToProps = (state) => ({
    text: "HI"
})

const mapDispatchToProps = (dispatch) => ({
    changeTime: () => {
      dispatch({
          type: 'CHANGE_TIME',
          text: '2013'
      })
    }
  })

const ChangeFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default ChangeFilters
