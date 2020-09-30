import React, {useState} from 'react'
import { withRouter } from 'react-router'

function SearchBar (props) {
  const [search, setSearch] = useState('')

  function handleSubmit (e) {
    e.preventDefault()

    return props.history.push('/searchresults/' + search)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='input is-rounded is-small searchBar ' id='searchbar' placeholder='Search' type='text' onChange={event => setSearch(event.target.value)} />
      <button className="button primaryBtn">Search</button>
    </form>
  )
}

export default withRouter(SearchBar)
