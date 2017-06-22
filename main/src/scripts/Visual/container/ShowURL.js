import { connect } from 'react-redux'
// import { toggleTodo, deleteTodo } from '../actions'
import URLlist from '../components/index'

/**
  mapStateToProps and mapDispatchToProps provides TodoList with the store's state and dispatches
  as props
**/

const mapStateToProps = state => {
  return {
    tabs: state.tabs
  }
}

const ShowURL = connect(
  mapStateToProps
)(URLlist)

export default ShowURL