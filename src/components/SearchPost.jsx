import React from 'react'

function SearchPost(props) {
    return (
        <div className="form-group">
            <label htmlFor="usr">Id Post:</label>
            <input
                type="text"
                className="form-control"
                id="usr"
            />
            <button
                type="button"
                className="btn btn-primary"
            >
            { props.children }
            </button>
        </div>
    )
}

export default SearchPost