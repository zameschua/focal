import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoListApp = () => (
	<div className="mdc-card bg-faded" style={{marginBottom: "5%"}}>
	  <section className="mdc-card__primary">
	    <h1 className="mdc-card__title mdc-card__title--large text-muted">To-do list</h1>
	  </section>
	  <section className="mdc-card__supporting-text text-muted">
	    <AddTodo />
	    <VisibleTodoList />
	    <Footer />
	  </section>
	</div>
)

export default TodoListApp


