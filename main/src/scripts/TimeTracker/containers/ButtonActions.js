import { connect } from 'react-redux'
import ButtonContainer from '../components/ButtonContainer'
import {clearAllTabInfo} from '../actions'

/**
  mapStateToProps and mapDispatchToProps provides component with the store's state and dispatches
  as props
**/

const mapDispatchToProps = dispatch => {
	return {
		handleClearAllClick: () => {
			console.log("hit");
			dispatch(clearAllTabInfo())
		}
	}
}

const ButtonActions = connect(
	null,
  mapDispatchToProps
)(ButtonContainer)

export default ButtonActions