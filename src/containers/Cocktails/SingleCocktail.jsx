import React from 'react'

const SingleCocktail = (props) => {
    return (
        <div>
            {props.match.params.id}
        </div>
    )
}

export default SingleCocktail
