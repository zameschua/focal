import React from 'react'

const SearchBar = () => {
  let input

  return (
    <div className="form-group col-sm-6 offset-sm-3" >
      <form

        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          window.location.assign("https://www.google.com.sg/search?q=" + input.value)
        }}
      >
        <input
        	style={{ borderRadius:"10px"}}
        	className="form-control"
        	placeholder = "Search Google"
          ref={node => {
            input = node
          }}
        />
      </form>
    </div>
  )
}

export default SearchBar