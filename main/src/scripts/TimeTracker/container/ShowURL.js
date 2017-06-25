import { connect } from 'react-redux'
import URLlist from '../components/URLlist'
import {clearAllTabInfo} from '../actions'

/**
  mapStateToProps and mapDispatchToProps provides TodoList with the store's state and dispatches
  as props
**/

const mapStateToProps = state => {
	if (state.timeTracker) {
	  return {
    	URLs: state.timeTracker.URL
  	}
	}
	else {
		return {
			URLs: []
		}
	}

}

const mapDispatchToProps = dispatch => {
	return {
		handleClick: () => {
			dispatch(clearAllTabInfo())
		}
	}
}

const ShowURL = connect(
  mapStateToProps,
  mapDispatchToProps
)(URLlist)

export default ShowURL