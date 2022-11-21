import React from 'react'

function ItemListContainer({greetings}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 alert alert-info text-center">
                    {greetings}
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer