import React from 'react'

export default function Search(props) {
    const { updateSearchTerm, search, plants } = props

    return (
        <div className="searchBar">
            <input type="text"
            placeholder="Search" onChange={updateSearchTerm} name="searchBar"/>
            <button onClick={()=>search(plants)}>Search</button>
        </div>
    )
}
