import { connect } from 'react-redux'
import URLlist from '../components/URLlist'
import {clearAllTabInfo} from '../actions'

/**
  mapStateToProps and mapDispatchToProps provides component with the store's state and dispatches
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

const ShowURL = connect(
  mapStateToProps
)(URLlist)

export default ShowURL