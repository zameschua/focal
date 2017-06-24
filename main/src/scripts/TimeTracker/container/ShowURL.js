import { connect } from 'react-redux'
import URLlist from '../components/URLlist'

/**
  mapStateToProps and mapDispatchToProps provides TodoList with the store's state and dispatches
  as props
**/

const mapStateToProps = state => {
	if (state.TimeTracker) {
	  return {
    	URLs: state.TimeTracker.URL
  	}
	}
	else {
		return {
			URLs: [{id: "dsafas", title: "google.com.sg", time: 50}]
		}
	}

}

const ShowURL = connect(
  mapStateToProps
)(URLlist)

export default ShowURL